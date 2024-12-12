import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shadcn Table",
  description: "A data table component with server side rendering, pagination, sorting, filtering and custom view."
}

export default function Home() {
  return (
    <div className="h-full flex-1 flex-col space-y-2 p-8 md:flex">
      <div className="flex items-center justify-between">
        <p className="text-muted-foreground">
          Here&apos;s a list of your expenses for this month!
        </p>
      </div>
    </div>
  );
}
