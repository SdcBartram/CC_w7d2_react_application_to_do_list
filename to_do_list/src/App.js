import './App.css';
import {useState} from 'react';

function App() {

  const [toDos, setToDos] = useState([
    {id: 1, name: "Buy shopping"},
    {id: 2, name: "Clean bathroom"},
    {id: 3, name: "Car's MOT"},
  ])

  const completeToDo = (toDoId) => {
    const newToDos = toDos.filter((toDo) => toDo.id !== toDoId)
    setToDos(newToDos)
  }

  const listToDos = toDos.map((toDo) => {
    return(
      <li key={toDo.id}>
        {toDo.name}
        <button onClick={() => completeToDo(toDo.id)}>Complete</button>
      </li>
    )
  })


  const [newToDo, setNewToDo] = useState("")

  const handleToDoInput = (event) => {
    setNewToDo(event.target.value)
  }

  const saveNewToDo = (event) => {
    event.preventDefault();

    const newToDoObj = {id: Date.now(), name:newToDo}
    const nextToDos = [...toDos, newToDoObj]
    setToDos(nextToDos)

    setNewToDo("")
  }

  return (
    <div className="App">
      <h1>ToDo's</h1>
      
      <form onSubmit={saveNewToDo}>
        <label htmlFor='new-todo'>Add a new todo: </label>
        <input id='new-todo' type='text' value={newToDo} onChange={handleToDoInput} />
        <input type='submit' value="Save Item" />

      </form>

      <ul>
        {listToDos}
      </ul>
      
    </div>
  );
}

export default App;
