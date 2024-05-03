import { Sidebar } from "../../_components/sidebar";

const page = async () => {
  return (
    <main className="size-full bg-slate-100 pt-16 dark:bg-app-dark md:pt-24 ">
      <div className="flex gap-x-7">
        <aside className="hidden w-64 shrink-0 md:block">
          <Sidebar />
        </aside>
      </div>
    </main>
  );
};

export default page;
