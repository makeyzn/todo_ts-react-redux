import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';

const AddForm = ({create}: any) => {
    const [value, setValue] = useState<string>('');

    const dispatch = useDispatch();

    const addNewTodo = (e: any) => {
        e.preventDefault();
        dispatch(addTodo({
          title: value,
        }))
      }
  return (
      <form>
        <input value={value} type="text" onChange={e => setValue(e.target.value)}/>
        <button onClick={addNewTodo}>Добавить</button>
      </form>
  )
}

export default AddForm
