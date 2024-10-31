import { createContext } from "react";

export const TypeContext = createContext("");

export const ErrorContext = createContext({ 
  isActive: false, message: "" 
})