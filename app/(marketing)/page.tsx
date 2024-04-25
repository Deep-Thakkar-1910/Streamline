import localFont from "next/font/local";

const headingFonts = localFont({ src: "../../public/fonts/font.woff2" });

const MarketingPage = () => {
  return (
    <>
      <main className="flex size-full bg-slate-400 dark:bg-zinc-900 flex-col items-center justify-center p-24">
        <h1 className={`text-2xl md:text-4xl  ${headingFonts.className}`}>
          Trello
        </h1>
      </main>
    </>
  );
};

export default MarketingPage;
