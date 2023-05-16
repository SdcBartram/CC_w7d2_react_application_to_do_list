import './App.css';
import {useState} from 'react';

function App() {

  const [toDos, setToDos] = useState([
    {id: 1, name: "Buy shopping", priority: true},
    {id: 2, name: "Clean bathroom", priority: false},
    {id: 3, name: "Car's MOT", priority: true},
  ])

  const [newToDo, setNewToDo] = useState("")
  const [newPriority, setNewPriority] = useState(""); 

  const handleToDoInput = (event) => {
    setNewToDo(event.target.value)
  }

  const handlePriority = (event) => {
    setNewPriority(event.target.value)
  }

  const completeToDo = (toDoId) => {
    const newToDos = toDos.filter((toDo) => toDo.id !== toDoId)
    setToDos(newToDos)
  }

  const listToDos = toDos.map((toDo) => {
    return(
      <li key={toDo.id} className={toDo.priority ? 'high_priority' : 'low_priority'}>
        {toDo.name} 
        
        <button onClick={() => completeToDo(toDo.id)}
        >Complete</button>
      </li>
    )
  })

  const saveNewToDo = (event) => {
    event.preventDefault();

    const newToDoObj = {id: Date.now(), name:newToDo, priority:newPriority}
    const nextToDos = [...toDos, newToDoObj]
    setToDos(nextToDos)

    setNewToDo("")
    setNewPriority("")
  }

  return (
    <div className="App">
      <h1>ToDo's</h1>
      
      <form onSubmit={saveNewToDo}>
        <label htmlFor='new-todo'>Add a new todo: </label>
        <input id='new-todo' type='text' value={newToDo} onChange={handleToDoInput} />
        <input id="high" type="radio"  name="priority" value="true" onChange={handlePriority}/>
          <label htmlFor="high">High</label>
          <input id="low" type="radio"  name="priority" value="false" onChange={handlePriority}/>
          <label htmlFor="low">Low</label>
        <input type='submit' value="Save Item" />

      </form>

      <ul>
        {listToDos}
      </ul>
      
    </div>
  );
}

export default App;
