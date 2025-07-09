import React, {useState} from 'react';

function MyList(){
    
    const [task, setTask] = useState(["Eat Breakfast", "Take a shower", "Walk the dog"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== "")
        {
            setTask(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index)
    {
        setTask(task.filter((_, i) => i !== index));
    }

    function moveUp(index){
        if(index>0)
        {
            const updatedTasks = [...task];
            [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]]
            setTask(updatedTasks);
        }
    }

    function moveDown(index){
        if(index<task.length-1)
        {
            const updatedTasks = [...task];
            [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1], updatedTasks[index]]
            setTask(updatedTasks);
        } 
    }

    return(<>
    <div className='ListContainer'>
        <h1>To Do List</h1>
        <div>
            <input type='text'
            placeholder='Enter a task'
            value={newTask}
            onChange={() => handleInputChange(event)}
            />
        </div>
        <button className='Add-button' 
        onClick={addTask}>Add Task</button>
        <ol>
            {task.map((element, index) => 
            <li key={index}>
                <span>{element}</span>
                <button className='deletebtn' onClick={() => deleteTask(index)}>Delete</button>
                <button onClick={() => moveUp(index)}>☝️</button>
                <button onClick={() => moveDown(index)}>👇</button>
                </li>)}

        </ol>
    </div>
    </>);

}

export default MyList