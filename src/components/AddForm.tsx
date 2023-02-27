import React, {useState} from 'react'

const AddForm = ({create}: any) => {
    const [value, setValue] = useState<string>('');

    const addNewTodo = (e: any) => {
        e.preventDefault();
        const newPost = {
          id: Date.now(),
          title: value,
          completed: false,
        }
        create(newPost)
      }
  return (
      <form>
        <input value={value} type="text" onChange={e => setValue(e.target.value)}/>
        <button onClick={addNewTodo}>Добавить</button>
      </form>
  )
}

export default AddForm
