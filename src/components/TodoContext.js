import React, { createContext, useReducer } from 'react';
import TodoReducer from './TodoReducer';

const initialData = [];
export const TodoContext = createContext(initialData);


export const TodoProvider = ({ children }) => {
    let [state, dispatch] = useReducer(TodoReducer, initialData);

    const addTodo = (todoObj) => {
        dispatch({
            type: 'ADD_TODO',
            payload: {
                id: todoObj.id,
                todo: todoObj.todo,
            }
        });
    }
    const deleteTodo = (id) => {
        dispatch({
            type: 'DELETE_TODO',
            id,
        });
    }

    return (
        <TodoContext.Provider value={{
            todo: state,
            addTodo,
            deleteTodo,
        }}>
            {children}
        </TodoContext.Provider>
    )
}
