"use client";

// theme provider as suggested in next js docs to avoid hydration warning
// references : https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#using-context-providers

import { ThemeProvider } from "next-themes";
const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
};

export default Providers;
