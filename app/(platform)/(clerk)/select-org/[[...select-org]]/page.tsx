import { OrganizationList } from "@clerk/nextjs";

const SelectOrganization = () => {
  return (
    <OrganizationList
      hidePersonal
      afterCreateOrganizationUrl="/organization/:id"
      afterSelectOrganizationUrl="/organization/:id"
    />
  );
};

export default SelectOrganization;
