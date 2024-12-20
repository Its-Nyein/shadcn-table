import { ExpenseData } from "@/app/Data-Table/columns";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, TrendingDown } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

export default function DataType({
    selectedTab, setSelectedTab
}: {
    selectedTab: string,
    setSelectedTab: Dispatch<SetStateAction<ExpenseData["type"]>>
}) {
    return (
        <div>
            <Label className="text-slate-600">Type</Label>
            <Tabs
                value={selectedTab}
                onValueChange={(value: any) => {
                    setSelectedTab(value as ExpenseData["type"])
                }}
                className="mt-1">
                <TabsList>
                    <TabsTrigger
                        className="h-8 gap-1"
                        value="income"
                    >
                        <TrendingUp size={25} />
                        Income
                    </TabsTrigger>
                    <TabsTrigger
                        className="h-8 gap-1"
                        value="expense"
                    >
                        <TrendingDown size={25} />
                        Expense
                    </TabsTrigger>
                </TabsList>
            </Tabs>
        </div>
    )
}