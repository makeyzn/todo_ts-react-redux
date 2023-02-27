import React, { useState } from 'react'

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

  const [value, setValue] = useState<string>('');

  const [filterTodos, setFilterTodos] = useState<FilterType>("all");

  const addNewTodo = (e: any) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title: value,
      completed: false,
    }
    setTodos([...todos, newPost]);
    setValue('');
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
      <form>
        <input value={value} type="text" onChange={e => setValue(e.target.value)}/>
        <button onClick={addNewTodo}>Добавить</button>
      </form>
      {filteredTodos.map(t => 
        <div>
          <input type="checkbox" checked={t.completed} onChange={() => changeCompleted(t.id)}/>
          <span>{t.title}</span>
          <button onClick={() => removeTodo(t.id)}>x</button>
        </div>
      )}
      <div>
        <button onClick={() => changeFilter("all")}>all</button>
        <button onClick={() => changeFilter("active")}>active</button>
        <button onClick={() => changeFilter("completed")}>completed</button>
      </div>

    </div>
  )
}

export default App
