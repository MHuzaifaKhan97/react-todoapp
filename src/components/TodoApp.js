import React, { useState, useContext } from 'react';
import bg from './bg.jpg';
import { TodoContext } from './TodoContext';

const TodoApp = () => {

    let [value, setValue] = useState("");
    let { todo, addTodo, deleteTodo } = useContext(TodoContext);
    let [id, setId] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(value === "" || value === " " || value === undefined){
            document.getElementById('validation').style.visibility = "visible";
        }
        else{
            document.getElementById('validation').style.visibility = "hidden";
            addTodo({
                id: id,
                todo: value,
            });
            setId(++id)
            setValue("")
       }
    }
    const removeTodo = (id) => {
        console.log("ID" + id);
        deleteTodo(id);
    }
    return (
        <div styles={{ backgroundImage: `url(${bg})` }}>
            <h1 className="bg-primary text-uppercase text-white p-3">Todo App</h1>
            <div className="container">
                <div className="col-md-8 offset-md-2 mt-5">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" value={value} onChange={(e) => { setValue(e.target.value) }} placeholder="Enter Todo..." aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-primary"
                                onClick={(e) => handleSubmit(e)} type="button" id="button-addon2">
                                <i className="fa fa-plus"></i> Add Todo</button>
                        </div>
                    </div>
                    <small id='validation' style={{visibility:'hidden'}} className="text-danger">please enter something...</small>
                </div>
                <div className="col-md-8 offset-md-2 mt-5">
                    <ul>
                        {todo.map((todoObj) => {
                            return <li className="alert alert-primary py-3"
                                style={{ listStyleType: 'none', fontSize: '20px' }}
                                key={todoObj.id} role="alert"

                            >{todoObj.todo}
                                <button
                                    className="btn btn-outline-danger float-right btn-small"
                                    onClick={() => removeTodo(todoObj.id)}>
                                    <span className="fa fa-remove"></span>
                                </button>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default TodoApp;