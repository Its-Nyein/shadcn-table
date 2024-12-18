"use client"

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { Separator } from "@radix-ui/react-separator";
import DataLabel from "./_components/Data-Label";
import DataNote from "./_components/Data-Note";
import DataType from "./_components/Data-Type";
import DataCategory from "./_components/Data-Category";
import DataAmount from "./_components/Data-Amount";
import { DatePickerDemo } from "./_components/Data-DatePicker";
import { DialogClose } from "@radix-ui/react-dialog";
import { expenseSchema } from "@/schema/schema";
import { Expense } from "@/schema/schema";
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { useRef, useState } from "react";
import { ExpenseData } from "../Data-Table/columns";
import { nanoid } from 'nanoid'
import { useExpenseStore } from "@/store/store";
import { useToast } from "@/hooks/use-toast";
import LoadingSpinner from "@/UI/LoadingSpinner";

export default function DataDialog() {

    const {addExpense, isLoading} = useExpenseStore();
    const {toast} = useToast();
    const dialogCloseRef = useRef<HTMLButtonElement | null>(null)

    const methods = useForm<Expense>({
        resolver: zodResolver(expenseSchema),
        defaultValues: {
            label: "",
            note: "",
            amount: 0.0,
            date: new Date(),
            category: "income",
            type: "income"
        }
    })

    const { reset } = methods;

    const [selectedTab, setSelectedTab] = useState<ExpenseData["type"]>("income")
    const [selectedCategory, setSelectedCategory] = useState<ExpenseData["category"]>("income")

    const onSubmit = async (data: Expense) => {

        const newExpense: ExpenseData = {
            id: nanoid(),
            label: data.label,
            note: data.note,
            category: selectedCategory,
            type: selectedTab,
            amount: data.amount,
            date: data.date
        };

        const result = await addExpense(newExpense);

        if(result) {
            toast({
                title: "Success",
                description: "New expense added successfully"
            }),
            dialogCloseRef.current?.click();
        }
    }

    const handleOnReset = () => {
        reset();
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant="outline"
                    size="sm"
                    className="h-8 lg:flex"
                >
                    <PlusCircledIcon className="mr-2 h-4 w-4" />
                    Add New
                </Button>
            </DialogTrigger>
            <DialogContent className="p-7 px-8">
                <DialogHeader>
                    <DialogTitle className="text-xl">Add New Data</DialogTitle>
                    <DialogDescription>
                        Fill the form to add new data
                    </DialogDescription>
                </DialogHeader>
                <Separator />
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)}>
                        <div className="flex flex-col gap-2 mt-1 items-center">
                            <div className="grid grid-cols-2 gap-5">
                                <DataLabel />
                                <DataNote />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                                <DataCategory
                                    selectedCategory={selectedCategory}
                                    setSelectedCategory={setSelectedCategory}
                                />
                                <DataType
                                    selectedTab={selectedTab}
                                    setSelectedTab={setSelectedTab}
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-5">
                                <DataAmount />
                                <DatePickerDemo />
                            </div>
                        </div>
                        <DialogFooter className="mt-4">
                            <DialogClose 
                                asChild 
                                onClick={handleOnReset}
                                ref={dialogCloseRef}
                                >
                                <Button>Cancel</Button>
                            </DialogClose>
                            <Button type="submit">Submit</Button>
                        </DialogFooter>
                    </form>
                </FormProvider>
            </DialogContent>
        </Dialog>
    )
}