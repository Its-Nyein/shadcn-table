"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { useFormContext, Controller } from "react-hook-form";
import { NumericFormat } from "react-number-format";

export default function DataPrice() {
    const { control, formState: { errors } } = useFormContext();
    const errorMessage = errors.amount?.message;

    return (
        <div className="flex flex-col gap-2 mt-3">
            <Label htmlFor="amount" className="text-slate-600">
                {`Amount`}
            </Label>
            <Controller
                name="amount"
                control={control}
                render={({ field: { onChange, value, ref } }) => (
                    <NumericFormat
                        value={value}
                        onValueChange={(values) => {
                            onChange(values.floatValue);
                        }}
                        decimalScale={2}
                        fixedDecimalScale
                        allowNegative={false}
                        thousandSeparator
                        id="amount"
                        customInput={Input}
                        placeholder="Enter amount"
                        getInputRef={ref}
                    />
                )}
            />

            {errorMessage && typeof errorMessage === "string" && (
                <div className="flex text-red-600 gap-1 items-center text-xs">
                    <InfoCircledIcon />
                    <p>{errorMessage}</p>
                </div>
            )}
        </div>
    );
}