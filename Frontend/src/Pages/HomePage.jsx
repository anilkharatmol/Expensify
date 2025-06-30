import { Route, Routes } from "react-router-dom";
import AddExpenseForm from "../Components/AddExpenseForm";
import DailyExpenses from "../Components/DailyExpenses";
import Navbar from "../Components/Navbar";


export default function HomePage () {
  return (
    <div>
        <Navbar/>
        <DailyExpenses/>
        <AddExpenseForm/>
    </div>
  )
}
