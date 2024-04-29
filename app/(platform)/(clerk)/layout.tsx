// this layout page is used to display auth pages (login, signup, and select-org)

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex size-full items-center justify-center">
      {children}
    </main>
  );
};

export default AuthLayout;
