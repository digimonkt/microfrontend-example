import React, { Suspense } from "react";
import "./App.css";
const RemoteHeader = React.lazy(() => import("coreComponents/CoreHeader"));

function App() {
  const [count, setCount] = React.useState(0);
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <RemoteHeader
          loadingFrom="Product"
          newCount={count}
          handleClick={() => {
            console.log("Remote function clicked");
          }}
        />
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
      <div>
        <p>Count: {{ count }}</p>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment count
        </button>
      </div>
    </div>
  );
}

export default App;
