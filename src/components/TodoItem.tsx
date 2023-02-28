import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo } from '../redux/todoSlice';

const TodoItem = ({ id, title, completed }: any) => {
    const dispatch = useDispatch();
    const handleCompleteClick = () => {
        dispatch(
            toggleComplete({ id: id, completed: !completed})
        )
    };

    const handleDeleteClick = () => {
        dispatch(
            deleteTodo({ id: id })
        )
    }


  return (
    <div>
        <input type="checkbox" checked={completed} onChange={handleCompleteClick}/>
        <span>{title}</span>
        <button onClick={handleDeleteClick}>x</button>
    </div>
  )
}

export default TodoItem
