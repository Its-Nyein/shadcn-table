"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { InfoCircledIcon } from "@radix-ui/react-icons"

export default function DataLabel() {
    return (
        <div className="flex flex-col gap-2 mt-3">
            <Label htmlFor="label" className="text-slate-600">
                {`Label`}
            </Label>
            <Input
                type="text"
                id="label"
                className="h-10 shadow-none"
                placeholder="Enter label"
            >
            </Input>

            <div className="flex text-red-600 gap-1 items-center text-xs">
                <InfoCircledIcon />
                <p>The data name is required</p>
            </div>
        </div>
    )
}