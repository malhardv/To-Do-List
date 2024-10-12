import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editID, setEditID] = useState(null);
  const [editValue, setEditValue] = useState('')

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo = {
        id: new Date().getTime(),
        text: inputValue,
      };
      setTodos([...todos, newTodo]);
      setInputValue('')
    }
  }

  const deleteTodo = (id) => {
    const updateTodo = todos.filter((todo) => todo.id !== id);
    setTodos(updateTodo)
  }

  const enterEditMode = (id, text) => {
    setEditMode(true);
    setEditID(id)
    setEditValue(value)
  }

  const updateTodo = (id, text) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === editID) {
        return { ...todo, text: editValue }
      }
      return todo;
    })

    setTodos(updatedTodos)
    setEditMode(false)
    setEditID(null)
    setEditValue('')
  }



  return (
    <div className="todo-container">
      <h2>To-Do List</h2>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />

      {editMode ? (
        <div>
          <input type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
          <button className= "updateButton" onClick={updateTodo}>Update</button>
        </div>
      ) : (
        <button className="addButton" onClick={addTodo}>Add</button>
      )}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>

            {todo.text}
            <div>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              <button className='updateButton' onClick={() => enterEditMode(todo.id, todo.text)}>Update</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
