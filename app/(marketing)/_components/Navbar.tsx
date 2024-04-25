import ThemeSwitcher from "@/app/ThemeSwitcher";

const Navbar = () => {
  return (
    <nav className="w-full h-12 fixed top-0 left-0 bg-slate-600 dark:bg-slate-800">
      <div className="p-2 w-full h-full flex items-center justify-between">
        <h1 className="text-2xl ">Navbar</h1>
        <div className="p-2 size-10">
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
