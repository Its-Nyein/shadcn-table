"use client"

import LoadingSpinner from "@/UI/LoadingSpinner"
import { columns } from "./columns"
import { DataTable } from "./data-table"
import { useExpenseStore } from "@/store/store"
import { useEffect, useState } from "react"

export default function AppTable() {
    const { allExpense, loadExpenses } = useExpenseStore();
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        loadExpenses().then(() => {
            setIsLoading(false)
        }).catch(() => {
            setIsLoading(false)
        });
    }, [])

    return (
        <div>
            {
                isLoading ? (
                    <LoadingSpinner />
                ) : (
                    <DataTable data={allExpense} columns={columns} />
                )
            }
        </div>
    )
}