import { ClerkProvider } from "@clerk/nextjs";
// this layout is used to enable protection on the dashboard pages
const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ClerkProvider>{children}</ClerkProvider>
    </>
  );
};

export default PlatformLayout;
