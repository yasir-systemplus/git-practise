import React from "react";

function Nav({ length }) {
  return (
    <div className="bg-gray-200 w-full p-2 mb-1">Total Counters: {length}</div>
  );
}

export default React.memo(Nav);
