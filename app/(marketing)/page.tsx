import { Button } from "@/components/ui/button";
import { Medal } from "lucide-react";
import localFont from "next/font/local";
import Link from "next/link";

const headingFonts = localFont({ src: "../../public/fonts/font.woff2" });

const MarketingPage = () => {
  return (
    <main className="flex size-full flex-col items-center justify-center bg-slate-100 dark:bg-app-dark">
      <div className="mb-6 flex w-64 items-center space-x-4 rounded-full bg-amber-100 p-4 uppercase text-amber-700 shadow-md dark:bg-amber-200 dark:shadow dark:shadow-black ">
        <Medal className="size-6" />
        <span className="text-sm font-bold ">No1 Task Management</span>
      </div>
      <h1
        className={`mb-6 text-xl sm:text-2xl  md:text-4xl ${headingFonts.className}`}
      >
        Streamline Helps Teams Move
      </h1>
      <h2
        className={`md:text-4xl" rounded-md bg-gradient-to-r from-pink-600 to-fuchsia-600 p-2 px-4 text-xl text-white shadow-md dark:shadow dark:shadow-black ${headingFonts.className}`}
      >
        Work Forward
      </h2>
      <p className="dark:text-slate-30000 mx-auto mt-6 max-w-xs text-center text-sm font-medium text-neutral-400  md:max-w-2xl md:text-xl">
        Collaborate, Manage Projects, and Reach New Productivity Peaks with
        Ease.From high rises to home office the way your team works is unique -
        acccomplish it all with Streamline.
      </p>
      <Button asChild className="mt-6" size="lg">
        <Link href={"/sign-up"}>Get Taskify For Free</Link>
      </Button>
    </main>
  );
};

export default MarketingPage;
