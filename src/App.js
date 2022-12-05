import React, {useState} from "react";

function App() {
    const [todos,setTodos] = useState([])
    const [input,setInput] = useState("")


    const addTodo = (event) => {
        event.preventDefault();
        setTodos([...todos, input]);
        setInput('');
    };

    return (
        <div>
            <h1>Todo App</h1>
            <form>
                <input value={input} onChange={event => setInput(event.target.value)} />
                <button type="submit" onClick={addTodo}>
                    Add Todo
                </button>
            </form>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
