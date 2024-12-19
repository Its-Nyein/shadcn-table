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
    openAlertDialog: boolean;
    setOpenAlertDialog: (openAlertDialog: boolean) => void;
    selectedExpense: ExpenseData | null;
    setSelectedExpense: (expense: ExpenseData | null) => void;
    deleteExpense: (id: string) => Promise<{success: boolean}>;
    openUpdateDialog: boolean;
    setOpenUpdateDialog: (openUpdateDialog: boolean) => void;
    updateExpense: (updatedExpense: ExpenseData) => Promise<{success: boolean}>;
}

export const useExpenseStore = create<expenseState>((set) => ({
  allExpense: [],
  isLoading: false,
  openAlertDialog: false,
  selectedExpense: null,
  openUpdateDialog: false,
  setOpenUpdateDialog: (openUpdateDialog) => {
    set({openUpdateDialog: openUpdateDialog})
  },
  setOpenAlertDialog: (openAlertDialog) => {
    set({openAlertDialog: openAlertDialog})
  },
  setSelectedExpense: (expense: ExpenseData | null) => {
    set({selectedExpense: expense})
  },
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
  },
  updateExpense: async (updatedExpense: ExpenseData) => {
    set({isLoading: true})

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      set((state) => ({
        allExpense: state.allExpense.map((expense) => expense.id === updatedExpense.id ? updatedExpense : expense)
      }))
      return {success: true}
    } finally {
      set({isLoading: false});
      set({openUpdateDialog: false});
      set({selectedExpense: null})
    }
  },
  deleteExpense: async (id: string) => {
      set({isLoading: true})

      try {
        await new Promise((resolve) => setTimeout(resolve, 1200));
        set((state) => ({
          allExpense: state.allExpense.filter(e => e.id !== id)
        }));
        return {success: true}
      } finally {
        set({isLoading: false});
        set({openAlertDialog: false});
        set({selectedExpense: null})
      }
  },
}))

function fetchExpenseData(): Promise<ExpenseData[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data)
        }, 1000);
    })
}