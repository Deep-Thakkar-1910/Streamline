"use client";
import { SignUp } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

// to display Signup page based on current theme
const CustomSignUp = () => {
  const { resolvedTheme } = useTheme();
  return (
    <SignUp
      path="/sign-up"
      appearance={{ baseTheme: resolvedTheme === "dark" ? dark : undefined }}
    />
  );
};

export default CustomSignUp;
