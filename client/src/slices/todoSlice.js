import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList: [],
    inProgList: [],
    doneList: []
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        saveTodo: (state, action) => {
            state.todoList.push(action.payload)
        },
        saveInProg: (state, action) => {
            state.inProgList.push(action.payload)
        },
        saveDone: (state, action) => {
            state.doneList.push(action.payload)
        },
        deleteTask: (state, action) => {
            if (action.payload.title === "ToDo List") {
                state.todoList.shift();
            } else if (action.payload.title === "In Progress") {
                state.inProgList.shift();
            } else {
                state.doneList.shift();
            }
        },
    }
});

export const { saveTodo, saveInProg, saveDone, deleteTask } = todoSlice.actions

export const selectTodoList = state => state.todos.todoList
export const selectInProgList = state => state.todos.inProgList
export const selectDoneList = state => state.todos.doneList

export default todoSlice.reducer