import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { json } from 'stream/consumers';

// export const getTodosAsync:any = createAsyncThunk(
//     'todos/getTodosAsync',
//     async () => {
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=7');
//         if(response.ok) {
//             const todos = await response.json();
//             return {todos}
//         }
//     }
// );

// export const addTodoAsync: any = createAsyncThunk(
//     'todos/addTodoAsync',
//     async (payload) => {
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=7', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({title: payload.title})
//         })
//         if(response.ok) {
//             const todo = await response.json();
//             return { todo };
//         }
//     }
// );




const initialState = [
    {id: 1, title: 'html', completed: true},
    {id: 2, title: 'js', completed: true},
    {id: 3, title: 'react', completed: true},
    {id: 4, title: 'redux', completed: false},
];

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
                completed: false
            }
            state.push(newTodo);
        },
        toggleComplete: (state, action) => {
            const index = state.findIndex(
                (todo) => todo.id === action.payload.id
            );
            state[index].completed = action.payload.completed;
        },
        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload.id)
        },
    },
    // extraReducers: {
    //     [getTodosAsync.fulfilled]: (state: any, action: any) => {
    //         return action.payload.todos
    //     },
        // [addTodoAsync.fulfilled]: (state: any, action: any) => {
        //     state.push(action.payload.todo)
        // }
    // },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
