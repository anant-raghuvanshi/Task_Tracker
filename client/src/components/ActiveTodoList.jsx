import { useState } from "react";
// import './ShowTodos.css'

const ActiveTodoList = (props) => {
    let todo = props.todo;
    let setActiveTodoList = props.setActiveTodoList;
    let setDoneTodoList = props.setDoneTodoList;
    let activeTodoList = props.activeTodoList;
    let donetodoList = props.donetodoList;

    const donetodo = () => {
        console.log("good")
        setDoneTodoList([...donetodoList, todo]);

        let obj=[];
        for(let i = 0 ; i < activeTodoList.length ; i++){
            if(activeTodoList[i] !== todo){
                obj.push(activeTodoList[i]);
            }
        }

        setActiveTodoList(obj);
    }
    return (
        <div>
            <div className="activeTodoList">
               <p className="contentActiveTodo">{todo}</p>
               <button className="done" onClick={donetodo}>Done</button>
               {/* <button className="reactive">Reactive</button> */}
            </div>
        </div>
    )
}

export default ActiveTodoList;