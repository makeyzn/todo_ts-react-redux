import React, { useState } from 'react'
import AddForm from './components/AddForm';
import Buttons from './components/Buttons';

export type TaskType = {
  id: number;
  title: string;
  completed: boolean;
};

export type FilterType = "all" | "active" | "completed";

const App = () => {
  const [todos, setTodos] = useState<Array<TaskType>>([
    {id: 1, title: 'html', completed: true},
    {id: 2, title: 'js', completed: true},
    {id: 3, title: 'react', completed: true},
    {id: 4, title: 'redux', completed: false},
  ]);

  const [filterTodos, setFilterTodos] = useState<FilterType>("all");


  const createTodo = (newPost: any) => {
    setTodos([...todos, newPost]);
  }

  const removeTodo = (id: number) => {
    let filtered = todos.filter(t => t.id !== id);
    setTodos(filtered);
  }

  const changeFilter = (value: FilterType) => {
    setFilterTodos(value);
  }

  const changeCompleted = (id: number) => {
    const change = todos.filter(t => {
      if(t.id === id) {
        t.completed = !t.completed
      }
      return t;
    })
    setTodos(change);
  } 

  let filteredTodos = todos;
  if(filterTodos === 'active') {
    filteredTodos = todos.filter(t => t.completed === false)
  }
  if(filterTodos === 'completed') {
    filteredTodos = todos.filter(t => t.completed === true)
  }

  return (
    <div>
      <AddForm create={createTodo}/>
      {filteredTodos.map(t => 
        <div>
          <input type="checkbox" checked={t.completed} onChange={() => changeCompleted(t.id)}/>
          <span>{t.title}</span>
          <button onClick={() => removeTodo(t.id)}>x</button>
        </div>
      )}
      <Buttons changeFilter={changeFilter}/>
    </div>
  )
}

export default App
