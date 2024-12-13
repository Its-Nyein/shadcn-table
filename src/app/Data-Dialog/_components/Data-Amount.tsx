"use client"

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { NumericFormat } from 'react-number-format';

export default function DataAmount() {
    return (
        <div className="flex flex-col gap-2 mt-3">
            <Label htmlFor="label" className="text-slate-600">
                {`Amount`}
            </Label>
            <NumericFormat
                value={0}
                className="h-"
                customInput={Input}
                thousandSeparator
                placeholder="Amount"
            />

            <div className="flex text-red-600 gap-1 items-center text-xs">
                <InfoCircledIcon />
                <p>The data name is required</p>
            </div>
        </div>
    )
}