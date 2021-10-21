import React, { useState } from "react";
import "./App.css";
import CountersPage from "./components/CountersPage";
import Nav from "./components/Nav";
import Table from "./components/Table";

function OldApp() {
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

    if (counter.value !== 0) {
      counter.value -= 1;
      setCounters(updatedCounters);
    }
  };

  const handleOnAdd = () => {
    const updatedCounters = [...counters, { id: Date.now(), value: 0 }];

    setCounters(updatedCounters);
  };

  return (
    <>
      <Nav length={counters.length} />
      <CountersPage
        counters={counters}
        onAdd={handleOnAdd}
        onDecrease={handleOnDecrease}
        onRemove={handleOnRemove}
        onIncrease={handleOnIncrease}
      />
      <Table></Table>
    </>
  );
}

export default OldApp;
