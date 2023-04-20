import {createSlice} from "@reduxjs/toolkit";

const getInitialTodo = () => {
    const localTodoList = window.localStorage.getItem('todoList');

    if(localTodoList) {
        return JSON.parse(localTodoList);
    }else {
        return [];
    }
};

const addToLocalStorage = (data) => {
    window.localStorage.setItem('todoList', JSON.stringify(data))
};

const initialValue = {
    todoList: getInitialTodo()
};


export const todoSlice = createSlice({
    name: "todo",
    initialState: initialValue,
    reducers: {
        addTodo: (state, action) => {
            let newArr =  [...state.todoList];
            newArr.push(action.payload);
            state.todoList = newArr;
            addToLocalStorage(newArr);
        },
        deleteTodo: (state, action) => {
            let newArr = [...state.todoList];
            newArr.forEach((el, index) => {
                if(el.id === action.payload) {
                    newArr.splice(index, 1);
                }
            });
            state.todoList = newArr;
            addToLocalStorage(newArr);
        },
        updateTodo: (state, action) => {
            let newArr = [...state.todoList];

            newArr.forEach(el => {
                if(el.id === action.payload.id) {
                    el.title = action.payload.title;
                    el.status = action.payload.status;
                }
            });

            state.todoList = newArr;
            addToLocalStorage(newArr);
        }
    }
});


export const {addTodo,deleteTodo,updateTodo} = todoSlice.actions;
export default todoSlice.reducer;



