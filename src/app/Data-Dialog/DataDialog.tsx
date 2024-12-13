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
import { DatePickerDemo } from "./Data-DatePicker";
import { DialogClose } from "@radix-ui/react-dialog";

export default function DataDialog() {
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
                <div className="flex flex-col gap-2 mt-1 items-center">
                    <div className="grid grid-cols-2 gap-5">
                        <DataLabel />
                        <DataNote />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                        <DataType />
                        <DataCategory />
                    </div>

                    <div className="grid grid-cols-2 gap-5 w-full">
                        <DataAmount />
                        <DatePickerDemo />
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose>
                        <Button>Cancel</Button>
                    </DialogClose>
                    <Button type="submit">Submit</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}