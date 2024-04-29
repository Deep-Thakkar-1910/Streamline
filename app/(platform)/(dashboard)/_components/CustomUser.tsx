"use client";

import { useEffect, useState } from "react";
import { UserButton } from "@clerk/nextjs";
import { Skeleton } from "@/components/ui/skeleton";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

const CustomUserButton = () => {
  const { resolvedTheme } = useTheme();
  const [loading, setLoading] = useState(true); // Add loading state
  //   to avoid hydration warning
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 500 milliseconds
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Skeleton className="h-[30px] w-[30px] rounded-full" />;
  }

  return (
    <UserButton
      appearance={{
        baseTheme: resolvedTheme === "dark" ? dark : undefined,
        elements: {
          avatarBox: {
            height: 30,
            width: 30,
          },
        },
      }}
    />
  );
};

export default CustomUserButton;
