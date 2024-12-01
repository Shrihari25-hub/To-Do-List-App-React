import React,{ useState } from "react";

function ToDoList() {

    const [tasks, setTasks] = useState(["Take shower", "Eat breakfast", "Go to college"]);
    const [newTasks, setNewTasks] = useState();

    function handleInputchange(event) {
       setNewTasks(event.target.value);
    }

    function handleAddTask() {

        if(newTasks.trim() !== "")
      setTasks(t => [...t, newTasks]);
      setNewTasks("");
    }

    function handleDeleteTask(index) {
       const updatedTask = tasks.filter((_, i) => i !== index);
       setTasks(updatedTask);
    }

    function handleTaskUp(index) {

        if(index > 0){

            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index-1]] = 
            [updatedTask[index-1], updatedTask[index]];

            setTasks(updatedTask);
        }
    }

    function handleTaskDown(index) {

        if(index < tasks.length -1){

            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index+1]] =
             [updatedTask[index + 1], updatedTask[index]]

             setTasks(updatedTask);
        }

    }


    return(<div className="To-Do-List">

        <h1>To-Do-List</h1>

        <input className="input" type="text" placeholder="Enter you Task..." value={newTasks} 
            onChange={handleInputchange}/>
        <button className="addButton" onClick={handleAddTask}>Add</button>

        <ol>
            {tasks.map((task, index) => 

            <li className="taskList">
                <span className="text">{task}</span>
                <button className="deleteButton" onClick={() => handleDeleteTask(index) }>Delete</button>
                <button className="upDownButton" onClick={() => handleTaskUp(index)}>Up</button>
                <button className="upDownButton" onClick={() => handleTaskDown(index)}>Down</button>

            </li>)}
        </ol>
    </div>);
}

export default ToDoList
