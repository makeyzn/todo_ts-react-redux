import React, {useEffect} from 'react'
import TodoItem from './TodoItem';
import { useSelector, useDispatch } from 'react-redux';
// import { getTodosAsync } from '../redux/todoSlice';

export type TaskType = {
    id: number;
    title: string;
    completed: boolean;
  };

const TodoList = () => {
    // const dispatch = useDispatch();
    const todos = useSelector((state: any) => state.todos)

    // useEffect(() => {
    //     dispatch(getTodosAsync());
    // }, [dispatch])

  return (
    <div>
        {todos.map((todo: any) => (
				<TodoItem id={todo.id} title={todo.title} completed={todo.completed} key={todo.id}/>
	    ))}
    </div>
  )
}

export default TodoList
