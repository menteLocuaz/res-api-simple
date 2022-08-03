import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const url = "https://jsonplaceholder.typicode.com/todos";
  const [todos, setTodos] = useState();
  const FectApi = async () => {
    const response = await fetch(url);
    console.log(response.status);
    const resposeJSON = await response.json();
    setTodos(resposeJSON);
    console.log(resposeJSON);
  };
  useEffect(() => {
    FectApi();
  }, []);

  return (
    <div className="App">
      <h1>Trabajndo en la api</h1>
      <ul>
        {!todos
          ? "Cargando"
          : todos.map((todo, index) => {
              return (
                <li key={index}>
                  {todo.title} {todo.completed ? "❌" : "✅"}
                </li>
              );
            })}
      </ul>
    </div>
  );
}

export default App;
