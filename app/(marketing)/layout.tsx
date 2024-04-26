import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      {children}
      <Footer />
    </>
  );
};

export default MarketingLayout;
