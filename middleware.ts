import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

// to set all /organization routes to be protected
const isRouteProtected = createRouteMatcher(["/organization(.*)"]);

// function to get previous url from the headers referer
export function previousUrlHandler(req: NextRequest) {
  const previousUrl = req.headers.get("Referer") || "/";
  return previousUrl;
}

export default clerkMiddleware((auth, req) => {
  const { userId, orgId } = auth();
  /* if user is logged in but somehow is visiting landing page
  redirect them to either select-org page or their dashboard
  based on presence of orgId
  */

  // if user is requesting to go to select-org page from orgId page then redirect them to select-org page
  // else redirect them to their dashboard
  const previousUrl = previousUrlHandler(req);
  if (userId && !isRouteProtected(req)) {
    if (orgId) {
      // if user is on dashboard page and is trying to go to select-org page then redirect them to select-org page
      if (
        previousUrl === `http://localhost:3000/organization/${orgId}` &&
        req.nextUrl.pathname !== "/select-org"
      ) {
        const urlToRedirectTo = new URL("/select-org", req.url);
        return NextResponse.redirect(urlToRedirectTo);
      } else if (previousUrl === `/`) {
        // if user is on landing page and is logged and has an orgId in then redirect them to their dashboard
        const urlToRedirectTo = new URL(`/organization/${orgId}`, req.url);
        return NextResponse.redirect(urlToRedirectTo);
      }
    }
    // if user is logged in but has no orgId and is not on select-org page then redirect to select-org page
    else if (!orgId && req.nextUrl.pathname !== "/select-org") {
      // NOTE: this is a very crucial condition check to avoid infinite loop of redirections
      const urlToRedirectTo = new URL("/select-org", req.url);
      return NextResponse.redirect(urlToRedirectTo);
    } else {
      return NextResponse.next();
    }
  }

  // if user is not logged in and is visiting a protected route redirect them to sign in page
  if (!userId && isRouteProtected(req)) {
    auth().redirectToSignIn({ returnBackUrl: req.url });
    /*
    NOTE: the argument in redirectToSignIn is to send the user back to page which they
      tried to access earlier for enhancing UX
     */
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
