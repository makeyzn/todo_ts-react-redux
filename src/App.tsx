import React, { useState } from 'react'

export type TaskType = {
  id: number;
  title: string;
  completed: boolean;
}

const App = () => {
  const [todos, setTodos] = useState<Array<TaskType>>([
    {id: 1, title: 'html', completed: true},
    {id: 2, title: 'js', completed: true},
    {id: 3, title: 'react', completed: true},
    {id: 4, title: 'redux', completed: false},
  ]);

  const [value, setValue] = useState<string>('');

  const addNewPost = (e: any) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title: value,
      completed: false,
    }
    setTodos([...todos, newPost]);
    setValue('');
  }

  const removeTask = (id: number) => {
    let filtered = todos.filter(t => t.id !== id);
    setTodos(filtered);
  }

  return (
    <div>
      <form>
        <input value={value} type="text" onChange={e => setValue(e.target.value)}/>
        <button onClick={addNewPost}>Добавить</button>
      </form>
      {todos.map(t => 
        <div>
          <input type="checkbox" checked={t.completed}/>
          <span>{t.title}</span>
          <button onClick={() => removeTask(t.id)}>x</button>
        </div>
      )}


    </div>
  )
}

export default App
