import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Transaction {
  id: number;
  type: "income" | "outcome";
  category: string;
  description: string;
  price: number;
  createdAt: string;
}


interface CreateTransactionInput {
  description: string;
  price: number;
  category: string;
  type: "income" | "outcome"
}

interface TransactionContextType {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (data: CreateTransactionInput) => Promise<void>
}

interface TransactionsProviderProps {
  children: ReactNode;
}


export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function fetchTransactions(query?: string) {
    const response = await api.get("/transactions", {
        params: {
          _sort: "createAt",
          _order: "desc",
            q: query
        }
    })
    console.log("Response data: ", response.data);
    setTransactions(response.data);
  }

  async function createTransaction(data: CreateTransactionInput) {
    const { category, description, price, type } = data

 const response = await api.post("transactions", {
      description,
      price,
      category,
      type,
      createdAt: new Date()
    })
    setTransactions((state) => [...state, response.data])
  }

  useEffect(() => {
    fetchTransactions();
    console.log("Transactions: ", transactions);
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions, fetchTransactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}
