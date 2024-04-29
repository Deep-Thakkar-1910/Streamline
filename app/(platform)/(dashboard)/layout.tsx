import DashBoardNavbar from "./_components/Navbar";

// this is layout for Dashboard page
const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header>
        <DashBoardNavbar />
      </header>
      {children}
    </>
  );
};

export default DashBoardLayout;
