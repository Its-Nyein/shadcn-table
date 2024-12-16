"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Expense } from "../../schema/schema";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";

export type ExpenseData = {
    id: string;
    label: string;
    note: string;
    category: |
    "income" |
    "food" |
    "utilities" |
    "housing" |
    "health" |
    "transport" |
    "work" |
    "entertainment" |
    "education" |
    "gifts";
    type: "income" | "expense";
    amount: number;
    date: Date
}

export const columns: ColumnDef<Expense>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "label",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Label" />
        ),
        cell: ({ row }) => (
            <div className="w-[150px] capitalize">{row.getValue("label")}</div>
        ),
        enableSorting: false,
        enableHiding: false
    },
    {
        accessorKey: "note",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Note" />
        ),
        cell: ({ row }) => {
            return (
                <div className="flex space-x-2">
                    <span className="max-w-[500px] truncate capitalize font-medium">
                        {row.getValue("note")}
                    </span>
                </div>
            );
        }
    },
    {
        accessorKey: "category",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Category" />
        ),
        cell: ({ row }) => {
            return (
                <div className="flex w-[100px] items-center">
                    <span className="capitalize"> {row.getValue("category")}</span>
                </div>
            );
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id));
        }
    },
    {
        accessorKey: "type",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Type" />
        ),
        cell: ({ row }) => {
            const type = row.getValue("type");
            return (
                <div className="flex w-[100px] items-center">
                    {type === "income" ? (
                        <TrendingUp size={20} className="mr-2" />
                    ) : (
                        <TrendingDown size={20} className="mr-2" />
                    )}
                    <span className="capitalize"> {row.getValue("type")}</span>
                </div>
            );
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id));
        }
    },
    {
        accessorKey: "amount",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Amount" />
        ),
        cell: ({ row }) => {
            const type = row.getValue("type");
            return (
                <div className="flex w-[100px] items-center">
                    <span
                        className={cn(
                            "capitalize",
                        )}
                    >
                        {" "}
                        {row.getValue("amount")}
                    </span>
                </div>
            );
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id));
        }
    },
    {
        accessorKey: "date",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Date" />
        ),
        cell: ({ row }) => {
            const date = new Date(row.getValue("date"));
            const formattedDate = date.toLocaleDateString("en-US", {
                day: "2-digit",
                month: "short",
                year: "numeric"
            });
            return (
                <div className="flex w-[100px] items-center">
                    <span className="capitalize">{formattedDate}</span>
                </div>
            );
        },
        filterFn: (row, id, value) => {
            const rowDate = new Date(row.getValue(id));
            const [startDate, endDate] = value;
            return rowDate >= startDate && rowDate <= endDate;
        }
    },
    {
        id: "actions",
        cell: ({ row }) => <DataTableRowActions row={row} />
    }
];