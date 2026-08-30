import { useState } from "react";
import ToDoForm from "./to-do-form";
import { v4 as uuidv4 } from 'uuid';
import ToDoStatus from "./TodoStatus";

export default function ToDo(){

    let [todo,setTodo]=useState([{task:"Sample todo",id:1,completed:false}]);
    
    function handleTodo(currTodoString){
        setTodo((currTodo)=>([...currTodo,{task:currTodoString,id:uuidv4(),completed:false}]));
    }

    function deleteTodo(id){
        setTodo((currTodo)=>{
            return currTodo.filter((el)=>(el.id!=id));
        })
    }

    function toggleButton(id){
        setTodo((currTodo)=>{
            return currTodo.map((el)=>{
                if(el.id===id){
                    if(el.completed){
                        return {...el,completed:false}
                    }
                    else{
                        return {...el,completed:true}
                    }
                }
                else{
                    return el;
                }
            });
        });
    }

    return(
        <>
        <ToDoForm handleTodo={handleTodo}/>
        <div>
        {todo.map((el) => (
            <div key={el.id} id="showtodo">
                  <span id="todotask"><span id="icons" onClick={()=>toggleButton(el.id)}>{el.completed ? <i className="fa-solid fa-square-check" style={{color:"#2563eb"}}></i> : <i className="fa-regular fa-square emptyIcon"></i>} </span><span id="task" style={ {textDecoration: el.completed && "line-through",opacity: el.completed && "0.7"}}>{el.task}</span></span><button id="deleteBtn" onClick={()=>deleteTodo(el.id)}><i className="fa-solid fa-trash-can" style={{color:"#ef233c"}}></i></button>
            </div>
        ))}
        </div>

        <ToDoStatus todo={todo}/>
        </>
    );
}
