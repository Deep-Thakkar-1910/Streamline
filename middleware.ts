import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// to set all /organization routes to be protected
const isRouteProtected = createRouteMatcher(["/organization(.*)"]);

export default clerkMiddleware((auth, req) => {
  const { userId, orgId } = auth();
  /* if user is logged in but somehow is visiting landing page
  redirect them to either select-org page or their dashboard
  based on presence of orgId
  */
  if (userId && !isRouteProtected(req)) {
    let path;

    // if user is logged in and has orgId then redirect them to their dashboard
    if (orgId) {
      path = `/organization/${orgId}`;
    }
    // if user is logged in but has no orgId and is not on select-org page then redirect to select-org page
    else if (!orgId && req.nextUrl.pathname !== "/select-org") {
      // NOTE: this is a very crucial condition check to avoid infinite loop of redirections
      path = "/select-org";
    } else {
      return NextResponse.next();
    }

    // making a new url based on path we get
    const urlToRedirectTo = new URL(path, req.url);
    return NextResponse.redirect(urlToRedirectTo);
  }

  // if user is not logged in and is visiting a protected route redirect them to sign in page
  if (!userId && isRouteProtected(req)) {
    auth().redirectToSignIn({ returnBackUrl: req.url });
    /*
      NOTE: the argument in redirectToSignIn is to send the user back to page which they
      tried to access earlier for enhancing UX
     */
  }

  // if user is logged in and on select-org page but has orgId, redirect them to their dashboard
  if (userId && req.nextUrl.pathname === "/select-org" && orgId) {
    const dashboardUrl = new URL(`/organization/${orgId}`, req.url);
    return NextResponse.redirect(dashboardUrl);
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
