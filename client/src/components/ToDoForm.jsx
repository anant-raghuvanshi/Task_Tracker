import { useState } from "react";
import ShowTodos from "./ShowTodos";
import { useEffect } from "react";
// import "./Todos.css";
import AllTodoList from "./AllTodoList";
import ActiveTodoList from "./ActiveTodoList";
import DoneTodoList from "./DoneTodoList";

const TodoForm = () => { 
    const [text, setText] = useState("");

    let data = {
        allTodos : ["first todo" , "second todo" , "third data" , "forth data"] , 
        activeTodos : ["first active todo" , "second active todo" , "third active data" , "forth  active data"] ,
        doneTodos : ["first done todo" , "second done todo" , "third done data" , "forth done data"] 
    }
    
    const [alltodoList , setAllTodoList] = useState(data.allTodos);
    const [activetodoList , setActiveTodoList] = useState(data.activeTodos);    
    const [donetodoList , setDoneTodoList] = useState(data.doneTodos);

    const [allTodo, setAllTodo] = useState(true);
    const [activeTodo, setActiveTodo] = useState(false);
    const [doneTodo, setDoneTodo] = useState(false);

    const allbuttonclicked = () => {
        setAllTodo(true);
        setActiveTodo(false);
        setDoneTodo(false);
    }

    const activebuttonclicked = () => {
        setAllTodo(false);
        setActiveTodo(true);
        setDoneTodo(false);
    }
    const donebuttonclicked = () => {
        setAllTodo(false);
        setActiveTodo(false);
        setDoneTodo(true);
    }


    const onInputChange = (e) => {
        setText(e.target.value);
    }

    const addtodo = () => {
        setAllTodoList([...alltodoList , text]);
       setActiveTodoList([...activetodoList , text]);
        setText("");
        console.log(data);
    }
    
    return (
        <div>
        <div className="form">
            <input
                placeholder="Enter new todo..."
                className="input"
                onChange={onInputChange}
                value={text}
            />
            <button onClick={addtodo}> Add </button>
        </div>
        <div className="todos">
            <div className="typeTodos">
               <button className="button" onClick={allbuttonclicked}>All Todos</button>
               <button className="button"  onClick={activebuttonclicked}>Active Todos</button>
               <button className="button"  onClick={donebuttonclicked}>Done Todos</button>
            </div>

            <div className="showTodos">
               {allTodo && alltodoList.map((todo) => <AllTodoList todo={todo}/>)}
               {activeTodo && activetodoList.map((todo) => <ActiveTodoList todo={todo} activeTodoList ={activetodoList} setActiveTodoList ={setActiveTodoList} donetodoList={donetodoList} setDoneTodoList = {setDoneTodoList}/>)}
               {doneTodo && donetodoList.map((todo) => <DoneTodoList todo={todo}  activeTodoList ={activetodoList} setActiveTodoList ={setActiveTodoList} donetodoList={donetodoList} setDoneTodoList = {setDoneTodoList}/>)}
            </div>
            
        </div>
        </div>
    )
}

export default TodoForm;