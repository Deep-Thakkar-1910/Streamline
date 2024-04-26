"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { Skeleton } from "@/components/ui/skeleton";
const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  //   to avoid hydration warning
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Skeleton className="size-6 rounded-sm" />;
  }

  if (resolvedTheme === "dark")
    return (
      <Sun
        className="size-5  cursor-pointer fill-amber-500 stroke-amber-500"
        onClick={() => setTheme("light")}
      />
    );
  if (resolvedTheme === "light")
    return (
      <Moon
        className="size-5  cursor-pointer fill-white"
        onClick={() => setTheme("dark")}
      />
    );
};

export default ThemeSwitcher;
