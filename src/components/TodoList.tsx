import React from 'react'
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

export type TaskType = {
    id: number;
    title: string;
    completed: boolean;
  };

const TodoList = () => {
    const todos = useSelector((state: any) => state.todos)

  return (
    <div>
        {todos.map((todo: any) => (
				<TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
	    ))}
    </div>
  )
}

export default TodoList
