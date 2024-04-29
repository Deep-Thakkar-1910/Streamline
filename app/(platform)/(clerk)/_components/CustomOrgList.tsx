"use client";

import { OrganizationList } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

// to display organization list based on current theme
const CustomOrgList = () => {
  const { resolvedTheme } = useTheme();
  return (
    <OrganizationList
      hidePersonal
      afterCreateOrganizationUrl="/organization/:id"
      afterSelectOrganizationUrl="/organization/:id"
      appearance={{ baseTheme: resolvedTheme === "dark" ? dark : undefined }}
    />
  );
};

export default CustomOrgList;
