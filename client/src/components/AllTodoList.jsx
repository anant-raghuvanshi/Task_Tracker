import { useState } from "react";
// import './ShowTodos.css'

const AllTodoList = ( props ) => {

    let todo = props.todo;
    return (
        <div>
            <div className="allTodoList">
               <p className="contentAllTodo">{todo}</p>
            </div>
        </div>
    )
}

export default AllTodoList;