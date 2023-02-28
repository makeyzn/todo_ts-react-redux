import React, { useState } from 'react'
import AddForm from './components/AddForm';
import Buttons from './components/Buttons';
import { useSelector } from 'react-redux'
import TodoList from './components/TodoList';



export type FilterType = "all" | "active" | "completed";

const App = () => {
  // const todos = useSelector()

  // const [filterTodos, setFilterTodos] = useState<FilterType>("all");


  // const createTodo = (newPost: any) => {
  //   setTodos([...todos, newPost]);
  // }

  // const removeTodo = (id: number) => {
  //   let filtered = todos.filter(t => t.id !== id);
  //   setTodos(filtered);
  // }

  // const changeFilter = (value: FilterType) => {
  //   setFilterTodos(value);
  // }

  // const changeCompleted = (id: number) => {
  //   const change = todos.filter(t => {
  //     if(t.id === id) {
  //       t.completed = !t.completed
  //     }
  //     return t;
  //   })
  //   setTodos(change);
  // } 

  // let filteredTodos = todos;
  // if(filterTodos === 'active') {
  //   filteredTodos = todos.filter(t => t.completed === false)
  // }
  // if(filterTodos === 'completed') {
  //   filteredTodos = todos.filter(t => t.completed === true)
  // }

  return (
    <div>
      <AddForm/>
      <TodoList />
      <Buttons/>
    </div>
  )
}

export default App
