import { useState } from "react";

import "./App.css";
import { Task } from "./Task.ts";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
