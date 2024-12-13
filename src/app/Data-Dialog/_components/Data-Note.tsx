"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { InfoCircledIcon } from "@radix-ui/react-icons"

export default function DataNote() {
    return (
        <div className="flex flex-col gap-2 mt-3">
            <Label htmlFor="label" className="text-slate-600">
                {`Note`}
            </Label>
            <Input
                type="text"
                id="note"
                className="h-10 shadow-none"
                placeholder="Enter note"
            >
            </Input>

            <div className="flex text-red-600 gap-1 items-center text-xs">
                <InfoCircledIcon />
                <p>The data name is required</p>
            </div>
        </div>
    )
}