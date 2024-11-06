import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4  my-4 bg-gray-200 rounded text-gray-600">
      <h1 className="text-2xl font-bold">PH Courses</h1>
      <nav className="space-x-4">
        <a href="#" className="hover:underline">
          Home
        </a>
        <a href="#" className="hover:underline">
          About
        </a>
        <a href="#" className="hover:underline">
          Contact
        </a>
      </nav>
    </header>
  );
};
