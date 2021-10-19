import React, { useState } from "react";
import Counter from "./Counter";

export default function CountersPage() {
  const [counters, setCounters] = useState([
    { id: 1, value: 3 },
    { id: 2, value: 4 },
    { id: 3, value: 5 },
    { id: 4, value: 34 },
  ]);

  const handleOnRemove = (id) => {
    const filtered = counters.filter((counter) => counter.id !== id);
    setCounters(filtered);
  };

  const handleOnIncrease = (id) => {
    const updatedCounters = [...counters];

    const index = updatedCounters.findIndex((c) => c.id == id);

    const counter = updatedCounters[index];

    counter.value += 1;

    setCounters(updatedCounters);
  };

  const handleOnDecrease = (id) => {
    const updatedCounters = [...counters];

    const index = updatedCounters.findIndex((c) => c.id == id);

    const counter = updatedCounters[index];

    counter.value -= 1;

    setCounters(updatedCounters);
  };

  const handleOnAdd = () => {
    const updatedCounters = [...counters, { id: Date.now(), value: 0 }];

    setCounters(updatedCounters);
  };

  return (
    <>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          id={counter.id}
          value={counter.value}
          onDecrease={handleOnDecrease}
          onIncrease={handleOnIncrease}
          onRemove={handleOnRemove}
        />
      ))}
      <button onClick={handleOnAdd} className="bg-yellow-500 p-2">
        Add
      </button>
    </>
  );
}
