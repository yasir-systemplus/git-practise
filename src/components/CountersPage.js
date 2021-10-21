import React from "react";
import Counter from "./Counter";

export default function CountersPage({
  counters,
  onDecrease,
  onIncrease,
  onAdd,
  onRemove,
}) {
  return (
    <>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          id={counter.id}
          value={counter.value}
          onDecrease={onDecrease}
          onIncrease={onIncrease}
          onRemove={onRemove}
        />
      ))}
      <button onClick={onAdd} className="bg-yellow-500 p-2">
        Add
      </button>
    </>
  );
}
