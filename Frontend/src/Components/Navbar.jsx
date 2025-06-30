import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";


export default function Navbar() {
  
  return (
  <Fragment>
      {/* Main Navbar */}
      <nav className="bg-teal-200 shadow-md px-4 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Title */}
        <p className="text-xl md:text-3xl font-bold text-cyan-900">
          Day to Day Expenses
        </p>
          
      </nav>

      {/* Navigation Tabs */}
      <div className="flex justify-center gap-8 bg-teal-200 py-3 shadow-inner">
        {["Daily", "Monthly", "Yearly"].map((label) => (
          <NavLink
            key={label}
            to={`/${label}`}
            className={({ isActive }) =>
              `text-base md:text-lg font-semibold transition-colors hover:text-blue-600 ${
                isActive
                  ? "text-blue-700 border-b-2 border-blue-700 pb-1"
                  : "text-cyan-950"
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </div>
    </Fragment>
  );
}
