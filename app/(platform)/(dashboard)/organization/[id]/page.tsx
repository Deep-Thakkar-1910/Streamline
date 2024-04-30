import { Sidebar } from "../../_components/sidebar";

const page = async () => {
  return (
    <main className="pt-16 dark:bg-app-dark bg-slate-100 md:pt-24 size-full " >
      <div className="flex gap-x-7">
        <div className="w-64 shrink-0 hidden md:block">
          <Sidebar/>
        </div>
      </div>
    </main>
  );
};

export default page;
