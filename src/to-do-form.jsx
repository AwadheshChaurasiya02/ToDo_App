import { useState } from "react";
import { Formik } from 'formik';

export default function ToDoForm({handleTodo}){

    let [input,setInput]=useState("");

    function handleInput(event){
        setInput(event.target.value);
    }

    function handleForm(event){
        event.preventDefault();
        if(input===""){
            return;
        }else{
        handleTodo(input);
        }
        setInput("");
    }

    return(
        <div>
            <h2><i className="fa-solid fa-clipboard-check" style={{color:"#2563eb"}}></i>TODO APP</h2>
            <form onSubmit={handleForm}>
                <label htmlFor="todo"></label>
                <input type="text" placeholder="Enter your Task.." id="todo" value={input} onChange={handleInput}></input>
                &nbsp;
                <button id="todobtn" type="submit">Add</button>
            </form>
        </div>
    );
}