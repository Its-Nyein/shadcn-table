import { Metadata } from "next";
import Header from "./AppHeader/Header";
import { siteConfig } from "@/config/config";
import { DataTable } from "./Data-Table/data-table";
import { columns } from "./Data-Table/columns"
import { data } from "@/data/data";

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s - ${siteConfig.title}`,
  },
  description: siteConfig.description,
}


export default async function Home() {
  return (
    <div className="h-full flex-1 flex-col space-y-2 pt-8 px-8 md:px-32 md:flex">
      <Header />
      <div className="flex items-center justify-between">
        <p className="text-muted-foreground">
          Here&apos;s a list of your expenses for this month!
        </p>
      </div>
      <DataTable data={data} columns={columns} />
    </div>
  );
}
