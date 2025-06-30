import axios from "axios";
import React, { useState } from "react";
import { CgAdd } from "react-icons/cg";

export default function AddExpenseForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    category: "food",
    amount: "",
    description: "",
  });

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      amount: parseInt(formData.amount),
    };

    try {
      const response = await axios.post(
        "http://localhost:4000/expenses/add",
        payload
      );

      console.log("Item added", response);

      // If the request succeeds (2xx), it reaches here
      alert("Item added!");
      setFormData({
        category: "",
        amount: "",
        description: "",
      });
    } catch (err) {
      if (err.response) {
        // Server responded with a non-2xx code
        alert("Failed to add expense: " + err.response.data.message);
      } else {
        // Network error or no response
        alert("Error: " + err.message);
      }
    }

    closeModal();
  };

  return (
    <div className="p-8">
      {/* Floating Add Button */}
      <button
        onClick={openModal}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition"
      >
        <CgAdd className="w-8 h-8" />
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg p-6 relative animate-fadeIn">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-4 text-gray-600 hover:text-red-500 text-2xl font-bold"
            >
              ×
            </button>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <h2 className="text-xl font-semibold text-gray-800">
                Add Transaction
              </h2>

              {/* Type Selector */}
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="food">Food</option>
                <option value="movie">Movie</option>
                <option value="gym">Gym</option>
                <option value="mobile recharge">Mobile Recharge</option>
              </select>

              {/* Amount */}
              <input
                type="number"
                name="amount"
                placeholder="Amount"
                value={formData.amount}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              {/* Description */}
              <textarea
                placeholder="Description"
                name="description"
                required
                rows="3"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-md font-semibold hover:bg-green-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
