"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { InfoCircledIcon } from "@radix-ui/react-icons"
import { useFormContext } from "react-hook-form"

export default function DataLabel() {
    const {
        register, formState: { errors }
    } = useFormContext();

    const errorMessage = errors.label?.message
    return (
        <div className="flex flex-col gap-2 mt-3">
            <Label htmlFor="label" className="text-slate-600">
                {`Label`}
            </Label>
            <Input
                {...register("label")}
                type="text"
                id="label"
                className="h-10 shadow-none"
                placeholder="Enter label"
            >
            </Input>

            {
                errorMessage && typeof errorMessage === 'string' && (
                    <div className="flex text-red-600 gap-1 items-center text-xs">
                        <InfoCircledIcon />
                        <p>{errorMessage}</p>
                    </div>
                )
            }
        </div>
    )
}