import React, { useState } from "react";
import Counter from "./Counter";

export default function Counters() {
  const [counters, setCounters] = useState([
    { id: 1, value: 3 },
    { id: 2, value: 4 },
    { id: 3, value: 5 },
    { id: 4, value: 34 },
  ]);

  //Calback function are also called predicate.

  //   const mapCounterToActuallCounterComp = (counter) => {
  //     return <Counter value={counter.value} />;
  //   };

  //   const mappedCounters = counters.map(mapCounterToActuallCounterComp);

  return counters.map((counter) => (
    <Counter key={counter.id} value={counter.value} />
  ));
}
