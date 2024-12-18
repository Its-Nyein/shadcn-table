import { create } from 'zustand'
import { ExpenseData } from '@/app/Data-Table/columns'
import { data } from '@/data/data'

interface expenseState {
    allExpense: ExpenseData[];
    setAllExpense: (allExpense: ExpenseData[]) => void;
    loadExpenses: () => Promise<void>;
    isLoading: boolean;
    addExpense: (expense: ExpenseData) => Promise<{success: boolean}>;
    openAlertDialog: boolean;
    setOpenAlertDialog: (openAlertDialog: boolean) => void;
    selectedDelExpense: ExpenseData | null;
    setSelectedDelExpense: (expense: ExpenseData | null) => void;
    deleteExpense: (id: string) => Promise<{success: boolean}>;
}

export const useExpenseStore = create<expenseState>((set) => ({
  allExpense: [],
  isLoading: false,
  openAlertDialog: false,
  selectedDelExpense: null,
  setOpenAlertDialog: (openAlertDialog) => {
    set({openAlertDialog: openAlertDialog})
  },
  setSelectedDelExpense: (expense: ExpenseData | null) => {
    set({selectedDelExpense: expense})
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
        set({selectedDelExpense: null})
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