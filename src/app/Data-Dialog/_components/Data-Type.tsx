import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, TrendingDown } from "lucide-react";
import { useState } from "react";

export default function DataType() {
    const [selectedTab, setSelectedTab] = useState("Income")
    return (
        <div>
            <Label className="text-slate-600">Type</Label>
            <Tabs value={selectedTab} onValueChange={setSelectedTab} className="mt-1">
                <TabsList>
                    <TabsTrigger
                        className="h-8 gap-1"
                        value="Income"
                    >
                        <TrendingUp size={20} />
                        Income
                    </TabsTrigger>
                    <TabsTrigger
                        className="h-8 gap-1"
                        value="Expense"
                    >
                        <TrendingDown size={20} />
                        Expense
                    </TabsTrigger>
                </TabsList>
            </Tabs>
        </div>
    )
}