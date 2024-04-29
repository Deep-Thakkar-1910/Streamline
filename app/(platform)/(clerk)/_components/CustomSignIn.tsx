"use client";
import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

// to display Signin page based on current theme
const CustomSignIn = () => {
  const { resolvedTheme } = useTheme();
  return (
    <SignIn
      path="/sign-in"
      appearance={{ baseTheme: resolvedTheme === "dark" ? dark : undefined }}
    />
  );
};

export default CustomSignIn;
