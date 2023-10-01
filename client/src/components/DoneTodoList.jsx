import { useState } from "react";
// import './ShowTodos.css'

const DoneTodoList = (props) => {
    let todo = props.todo;
        let setActiveTodoList = props.setActiveTodoList;
        let setDoneTodoList = props.setDoneTodoList;
        let activeTodoList = props.activeTodoList;
        let donetodoList = props.donetodoList;
    
        const reactiveTodo = () => {
            setActiveTodoList([...activeTodoList, todo]);
    
            let obj=[];
            for(let i = 0 ; i < donetodoList.length ; i++){
                if(donetodoList[i] !== todo){
                    obj.push(donetodoList[i]);
                }
            }
    
            setDoneTodoList(obj);
        }

    return (
        <div>
            <div className="doneTodoList">
               <p className="contentDoneTodo">{todo}</p>
               {/* <button className="done">Done</button> */}
               <button className="reactive" onClick={reactiveTodo}>Reactive</button>
            </div>
        </div>
    )
}

export default DoneTodoList;