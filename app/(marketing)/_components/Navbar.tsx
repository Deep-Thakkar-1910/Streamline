import ThemeSwitcher from "@/app/ThemeSwitcher";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed left-0 top-0 w-full border-b bg-white dark:bg-app-dark-navbar">
      <div className="flex h-full w-full items-center justify-between p-2 py-4 md:p-6">
        <div className="flex items-center space-x-2">
          <Image
            src={"/logo.svg"}
            alt="Logo"
            width={50}
            height={50}
            className="size-10"
          />
          <h1 className="text-base font-semibold md:text-2xl">Streamline</h1>
        </div>
        <div className="flex items-center space-x-4">
          <ThemeSwitcher />
          <Button size="lg" asChild variant="outline">
            <Link href="/sign-in">Login</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
