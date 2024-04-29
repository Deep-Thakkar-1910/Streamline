import Image from "next/image";
import ThemeSwitcher from "@/app/ThemeSwitcher";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import CustomOrgSwitcher from "./CustomOrgSwitcher";
import CustomUserButton from "./CustomUser";

const DashBoardNavbar = () => {
  return (
    <nav className="fixed left-0 top-0 z-50 h-16 w-full border-b bg-white shadow-sm dark:bg-app-dark-navbar">
      <div className="flex h-full w-full items-center px-2 sm:px-4 md:px-6">
        {/* this div is for displaying logo and create button */}
        <div className="flex items-center space-x-3">
          <Image
            src={"/logo.svg"}
            alt="Logo"
            width={50}
            height={50}
            className="hidden size-10 md:block"
          />
          <h1 className="hidden text-base font-semibold md:block md:text-2xl">
            Streamline
          </h1>
          <Button className="hidden md:block" variant="primary">
            Create
          </Button>
          <Button className="md:hidden" size="sm" variant="primary">
            <Plus className="size-4" />
          </Button>
        </div>

        {/* this div is for displaying themeSwitcher and orgSwitcher button */}
        <div className="ml-auto flex items-center space-x-2 md:space-x-4">
          <ThemeSwitcher />
          <CustomOrgSwitcher />
          <CustomUserButton />
        </div>
      </div>
    </nav>
  );
};

export default DashBoardNavbar;
