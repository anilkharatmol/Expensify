import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';

export default function DailyExpenses() {
  const [fetchedExpenses, setFetchedExpenses] = useState([]);


  const fetchExpenses = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/expenses`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Token")}`
        }
      });
    
      setFetchedExpenses(response.data);
    } catch (err) {
      console.error('Error fetching expenses:', err);
    }
  };

  useEffect(()=>{
    fetchExpenses();
  },[])
  
 async function handleDeleteExpense (id){
    try {
        await axios.delete(`http://localhost:4000/expenses/delete/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("Token")}`
          }
        });

        alert("Expense deleted successfully")
        
    } catch (error) {
        console.log("Error", error);
        
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
     
      {/* Expense List */}
      {fetchedExpenses.length === 0 ? (
        <p className="text-center text-gray-500 italic">No expenses for this day.</p>
      ) : (
        <ul className="space-y-4">
          {fetchedExpenses.map((exp) => (
            <li
              key={exp.id}
              className="p-4 bg-white shadow-sm rounded-lg border-l-4 border-green-400"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold text-lg text-gray-800">{exp.category}</p>
                </div>
                <span className="font-bold text-lg">{exp.description}</span>
                <span className="text-green-700 font-bold text-lg">₹{exp.amount}</span>
              <button onClick={()=>{handleDeleteExpense(exp.id)}} className="px-4 py-2 bg-red-500 text-white font-bold rounded-xl cursor-pointer hover:bg-red-800" >Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
