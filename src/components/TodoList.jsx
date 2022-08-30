
import { useState } from "react";



const TodoList = () => {

    const[todo, setTodo] = useState([]);
    const[todoTitle, setTodoTitle] = useState("");
    const[todoEditing, setTodoEditing] = useState("");
    const[editingText, setEditingText] = useState("");


    //Adding title
    const addTitle = () => {
        const todoEle = {
            id: new Date().getTime(),
            title: todoTitle,
            createdAt: new Date(),
        }
        setTodo([...todo, todoEle])
        setTodoTitle("");
    }


    // const deleteTitle = (index) => {
    //     let list = [...todo];
    //     console.log("LN23",list)
    //     console.log(typeof(list))
    //     list = Object.keys(list);
    //     console.log("Array",list);
    //     console.log("LN24",index)
    //     list.splice(index,1)
    //     console.log("LN26",list)
    //     setTodo(list);
    // }


    //Deleting title
    const deleteTitle = (index) => {
        console.log("LN35",index)
        console.log("LN36",todo)
        console.log(typeof(todo));
        let list = todo.filter((item) => {
            console.log("item id",item.id)
            if(item.id != index) {
                console.log("Entered")
                return item;
            }
        })
        setTodo(list)
    }

    // Editing Title
    const editTodo = (id) => {
        const list = [...todo].map((item) => {
            if(item.id === id) {
                item.title = editingText
            }
            return item
        })
        setTodo(list)
        setTodoEditing(null)
        setEditingText("")
    }

    



    return(
        <>
        <h1>Todo App</h1>

        <input type="text" placeholder="Enter the title" value={todoTitle} onChange={(e)=>setTodoTitle(e.target.value)}/>

        <button onClick={addTitle}>Add</button>

        <p>{todoTitle}</p>
        <h2>My todo list</h2>

        <ul>
            {todo.map((item)=>{
                return <li key={item.id}>
                    
                    {todoEditing === item.id ? 
                    (<input type="text" value={editingText} onChange={(e)=>setEditingText(e.target.value)} />) :
                    (<span>{item.title} </span>)}

                    {todoEditing === item.id ? 
                    (<button onClick={()=>editTodo(item.id)}>Update</button>) : 
                    (<button onClick={()=>setTodoEditing(item.id)}>Edit</button>)}

                    <button onClick={()=>deleteTitle(item.id)}>Delete</button>
                    
                </li>
            })}
        </ul>
        </>
    )
}

export default TodoList;