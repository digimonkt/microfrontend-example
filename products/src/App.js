import React, { Suspense } from "react";
import "./App.css";
const RemoteHeader = React.lazy(() => import("coreComponents/CoreHeader"));

function Counter() {
  return (
    <div>
      <p>Count: {0}</p>
      <button>Increment count</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <RemoteHeader loadingFrom="Product" />
      </Suspense>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        FROM PRODUCT
      </a>
      <Counter />
    </div>
  );
}

export default App;
