"use client";

// for checking the current theme and returning the org Switcher component according to theme
import { useEffect, useState } from "react";
import { OrganizationSwitcher } from "@clerk/nextjs";
import { Skeleton } from "@/components/ui/skeleton";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

const CustomOrgSwitcher = () => {
  const { resolvedTheme } = useTheme();
  const [loading, setLoading] = useState(true); // Add loading state
  //   to avoid hydration warning
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 500 milliseconds
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Skeleton className="h-6 w-[5.5rem]" />
      ) : (
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl="/organization/:id"
          afterSelectOrganizationUrl="/organization/:id"
          afterLeaveOrganizationUrl="/select-org"
          appearance={{
            baseTheme: resolvedTheme === "dark" ? dark : undefined,
          }}
        />
      )}
    </>
  );
};

export default CustomOrgSwitcher;
