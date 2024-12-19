"use client"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
  } from "@/components/ui/alert-dialog"
import { useToast } from "@/hooks/use-toast";
import { useExpenseStore } from "@/store/store"

export function AlertDialogDemo() {
  
  const { isLoading ,openAlertDialog, setOpenAlertDialog, selectedExpense, setSelectedExpense, deleteExpense} = useExpenseStore();
  const {toast} = useToast();

  async function deleteExpenseFx() {
    if(selectedExpense) {
      const result = await deleteExpense(selectedExpense.id);
      if(result) {
        toast({
          title: "Expense Deleted",
          description: `${selectedExpense.label} has been delected successfully`
        })
      }
      setSelectedExpense(null);
      setOpenAlertDialog(false)
    }
  }

  const handleOnCancel = () => {
    setSelectedExpense(null);
    setOpenAlertDialog(false);
  };

    return (
      <AlertDialog
        open={openAlertDialog}
        onOpenChange={open => setOpenAlertDialog(open)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="mt-5">
            <AlertDialogCancel
              onClick={handleOnCancel}
            >Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={deleteExpenseFx}
            >{isLoading ? "Deleting..." : "Delete"}</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  