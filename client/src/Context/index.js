import axios from "axios";
import { createContext, useContext, useState } from "react";

const APPContext = createContext();

const initialState = { allTodos: [] }
const editState = { edit: false, id: [] };

export const Context = ({ children }) => {
    const [todo, setTodo] = useState(initialState);
    const [toEdit, setToEdit] = useState(editState)

    const getAllTodos = async () => {
        const response = await axios.get('http://localhost:3001/todos');
        setTodo((prevState) => ({
            ...prevState,
            allTodos: response.data
        }))
    }

    const editTodo = async (id, newData) => {
        const response = await axios.put(`http://localhost:3001/todos/${id}`, newData)
        setTodo((prevState) => ({
            ...prevState,
            allTodos: response.data
        }))

    }

    const addTodo = async (data) => {
        const id = Math.random();
        const { titulo, descricao, date } = data;
        const response = await axios.post('http://localhost:3001/todos', {
            id, titulo, descricao, date
        })

        setTodo((prevState) => ({
            ...prevState,
            allTodos: response.data
        }))

    }

    const removeTodo = async (id) => {
        const response = await axios.delete(`http://localhost:3001/todos/${id}`);
        setTodo((prevState) => ({
            ...prevState,
            allTodos: response.data
        }))
    }

    return (
        <APPContext.Provider value={{ todo, getAllTodos, addTodo, editTodo, removeTodo, toEdit, setToEdit }}>
            {children}
        </APPContext.Provider>
    )
}


export const useMyContext = () => {
    const { todo, getAllTodos, addTodo, editTodo, removeTodo, toEdit, setToEdit } = useContext(APPContext);

    return { todo, getAllTodos, addTodo, editTodo, removeTodo, toEdit, setToEdit };
}