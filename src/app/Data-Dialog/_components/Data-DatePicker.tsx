"use client"

import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Label } from "@/components/ui/label"
import { useFormContext } from "react-hook-form"

export function DatePickerDemo() {
    const { setValue, watch } = useFormContext()
    const date = watch('date')

    const handleSelect = (date: Date | undefined) => {
        setValue('date', date, {
            shouldValidate: true,
            shouldDirty: true
        })
    }

    return (
        <div className="flex flex-col gap-2 mt-3">
            <Label htmlFor="label" className="text-slate-600">
                {`Date`}
            </Label>
            <Popover modal={true}>
                <PopoverTrigger asChild>
                    <Button
                        variant={"outline"}
                        className={cn(
                            "w-[220px] justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                        )}
                    >
                        <CalendarIcon />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={handleSelect}
                        initialFocus
                        disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                        }
                    />
                </PopoverContent>
            </Popover>
        </div>
    )
}
