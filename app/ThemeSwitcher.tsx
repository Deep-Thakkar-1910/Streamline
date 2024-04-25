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
    return <Skeleton className="size-5 rounded-md shadow-md" />;
  }

  if (resolvedTheme === "dark")
    return (
      <Sun
        className="size-5 fill-amber-500 shadow-md"
        onClick={() => setTheme("light")}
      />
    );
  if (resolvedTheme === "light")
    return (
      <Moon
        className="size-5 fill-white shadow-md"
        onClick={() => setTheme("dark")}
      />
    );
};

export default ThemeSwitcher;
