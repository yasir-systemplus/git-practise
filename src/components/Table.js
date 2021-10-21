import React from "react";

export default function Table({ children }) {
  return (
    <table className="border-collapse border border-green-800 w-4/5">
      {children}
    </table>
  );
}
