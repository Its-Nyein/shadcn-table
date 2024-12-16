import { create } from 'zustand'
import { ExpenseData } from '@/app/Data-Table/columns'
import { data } from '@/data/data'

interface expenseState {
    allExpense: ExpenseData[];
    setAllExpense: (allExpense: ExpenseData[]) => void;
    loadExpenses: () => Promise<void>;
}

export const useExpenseStore = create<expenseState>((set) => ({
  allExpense: [],
  setAllExpense: (allExpense) => {
    set({ allExpense: allExpense})
  },
  loadExpenses: async () => {
    const fetchedExpenseData = await fetchExpenseData();
    set({ allExpense: fetchedExpenseData})
  }
}))

function fetchExpenseData(): Promise<ExpenseData[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data)
        }, 1000);
    })
}