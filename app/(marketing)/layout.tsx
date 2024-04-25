import Navbar from "./_components/Navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      {children}
      <footer></footer>
    </>
  );
};

export default MarketingLayout;
