import { ExpenseData } from "@/app/Data-Table/columns";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function DataCategory({
    selectedCategory, setSelectedCategory
}: {
    selectedCategory: string,
    setSelectedCategory: Dispatch<SetStateAction<ExpenseData["category"]>>
}) {
    const [isClient, setIsClient] = useState(false)

    const categories = [
        "income",
        "food",
        "utilities",
        "housing",
        "health",
        "transport",
        "work",
        "entertainment",
        "education",
        "gifts"
    ];

    useEffect(() => {
        setIsClient(true);
        setSelectedCategory("income")
    }, [])

    if (!isClient) return null;

    return (
        <div className="flex flex-col gap-2 mt-[6px]">
            <Label className="text-slate-600">{`Category`}</Label>

            <Select
                value={selectedCategory}
                onValueChange={(value: any) => {
                    setSelectedCategory(value as ExpenseData["category"])
                }}>
                <SelectTrigger className="shadow-none">
                    <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                    {categories.map(category => (
                        <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    )
}