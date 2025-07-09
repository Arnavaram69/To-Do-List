import React, {useState} from 'react';

function MyList(){
    
    const [task, setTask] = useState(["Eat Breakfast", "Take a shower", "Walk the dog"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(){
        setNewTask(element.target.value);
    }

    function addTask(){
        setTask(t => [...t, newTask]);
    }

    function moveUp(){

    }

    function moveDown(){

    }

    return(<>
    <div className='ListContainer'>
        <h1>To Do List</h1>
        <div>
            <input type='text'
            placeholder='Enter a task'
            value={newTask}
            onChange={()=>handleInputChange}/>
        </div>
        <button className='Add-button' 
        onClick={addTask}>Add Task</button>
        
    </div>
    </>);

}

export default MyList