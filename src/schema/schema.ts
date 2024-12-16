import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const expenseSchema = z.object({
  label: z.string().min(1, "Label is required").max(20, "Label must be 20 characters or less"),
  note: z.string().min(1, "Note is required").max(25, "Note must be 25 characters or less"),
  category: z.string(),
  type: z.enum(["Income", "expense"]),
  amount: z
    .number({
      required_error: "Amount is required",
      invalid_type_error: "Amount must be a number",
    })
    .nonnegative("Amount can't be negative")
    .multipleOf(0.01, "Amount must have at most 2 decimal places"),
  date: z.date()
});

export type Expense = z.infer<typeof expenseSchema>;