"use client";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
// this layout is used to enable protection on the dashboard pages
const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  // configure theme based on the user's preference
  const { resolvedTheme } = useTheme();
  const appearance = resolvedTheme === "dark" ? dark : undefined;
  return (
    <>
      <ClerkProvider appearance={{ baseTheme: appearance }}>
        {children}
      </ClerkProvider>
    </>
  );
};

export default PlatformLayout;
