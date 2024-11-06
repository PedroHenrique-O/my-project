import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center justify-center p-4 text-gray-700 bg-gray-100 rounded my-8">
      <div className="mb-2">
        <p className="text-sm">
          Made with <span className="text-red-500">&hearts;</span> by{" "}
          <strong>Pedro</strong>
        </p>
      </div>

      <p className="text-sm">
        &copy; {new Date().getFullYear()} PH Courses. All rights reserved.
      </p>
    </footer>
  );
};
