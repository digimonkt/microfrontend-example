import React from "react";

function Counter() {
  return (
    <div>
      <div>Name: cart</div>
      <p>Count: {0}</p>
    </div>
  );
}

function CounterWithProvider() {
  return <Counter />;
}

export default CounterWithProvider;
