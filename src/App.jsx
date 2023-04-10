import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className="text-center">tailwind and daisy ui added</h1>
      <button className="btn">Button</button>
    </div>
  );
}

export default App;
