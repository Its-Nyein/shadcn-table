import { create } from 'zustand'
import { ExpenseData } from '@/app/Data-Table/columns'
import { data } from '@/data/data'
import { resolve } from 'path';

interface expenseState {
    allExpense: ExpenseData[];
    setAllExpense: (allExpense: ExpenseData[]) => void;
    loadExpenses: () => Promise<void>;
    isLoading: boolean;
    addExpense: (expense: ExpenseData) => Promise<{success: boolean}>;
}

export const useExpenseStore = create<expenseState>((set) => ({
  allExpense: [],
  isLoading: false,
  setAllExpense: (allExpense) => {
    set({ allExpense: allExpense})
  },
  loadExpenses: async () => {
    const fetchedExpenseData = await fetchExpenseData();
    set({ allExpense: fetchedExpenseData})
  },
  addExpense: async (expense: ExpenseData) => {
    set({isLoading: true})

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      set((state) => ({allExpense: [expense, ...state.allExpense]}));
      return {success: true}
    } finally {
      set({isLoading: false})
    }
  }
}))

function fetchExpenseData(): Promise<ExpenseData[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data)
        }, 1000);
    })
}