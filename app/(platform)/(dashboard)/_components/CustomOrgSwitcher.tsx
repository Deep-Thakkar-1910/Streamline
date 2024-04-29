"use client";

// for checking the current theme and returning the org Switcher component according to theme
import { useEffect, useState } from "react";
import { OrganizationSwitcher, useOrganizationList } from "@clerk/nextjs";
import { Skeleton } from "@/components/ui/skeleton";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import { useParams } from "next/navigation";
const CustomOrgSwitcher = () => {
  const params = useParams();
  const { setActive } = useOrganizationList();
  const { resolvedTheme } = useTheme();
  const [loading, setLoading] = useState(true); // Add loading state
  //   to avoid hydration warning
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 500 milliseconds
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // to set active org based on the url params
  useEffect(() => {
    if (!setActive) return;
    // setting the active org based on the url params everytime id is changed
    setActive({
      organization: params.id as string,
    });
  }, [setActive, params.id]);
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
