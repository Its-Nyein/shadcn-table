"use client";

import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Row } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { useExpenseStore } from "@/store/store";
import { ExpenseData } from "./columns";
import { nanoid } from "nanoid";
import { toast } from "@/hooks/use-toast";

export function DataTableRowActions({row}: {row: Row<ExpenseData>}) {

    const {setSelectedExpense, setOpenAlertDialog, setOpenUpdateDialog, addExpense} = useExpenseStore();
    // const task = taskSchema.parse(row.original);

    const handleOnDelete = () => {
        setOpenAlertDialog(true);
        setSelectedExpense(row.original)
    }

    const handleOnEdit = () => {
        setOpenUpdateDialog(true)
        setSelectedExpense(row.original)
    }

    async function handleOnCopy() {
        
        const copyExpense: ExpenseData = {
            ...row.original,
            id: nanoid(),
            label: `${row.original.label} (copy)`,
            date: new Date()
        }

        const result = await addExpense(copyExpense)

        if(result) {
            toast({
                title: "Copied successfully",
                description: "Expense has been copied successfully"
            })
        }
    }

    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                >
                    <DotsHorizontalIcon className="h-4 w-4" />
                    <span className="sr-only">Open menu</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[160px]">
                <DropdownMenuItem
                    onClick={() => handleOnEdit()}
                >Edit</DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => handleOnCopy()}
                >Make a copy</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    onClick={() => handleOnDelete()}
                >
                    Delete
                    <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}