import { useState } from "react"
import Card from "./Card"
import Input from "./input"


const Tasks=()=>{

    const initialTasks=[
        {
          id:1,
          text:"This is my first task"
        },
        {
          id:2,
          text:"This is my Second task"
        },
        {
          id:3,
          text:"This is my third task"
        },
        {
          id:4,
          text:"This is my fourth task"
        },
        {
          id:5,
          text:"This is my fifth task"
        },
    ]

    const [tasks,setTasks] = useState(initialTasks)
  
  const handleComplete=(taskId)=>{
    setTasks(previousTasks => previousTasks.filter ((task)=>task.id !== taskId))
  }

  const addTask = (taskText) => {
    setTasks(previousTasks => [...previousTasks, {id: Math.random , text : taskText}])
  }


    return(
        <>
            <Input addTask={addTask}/>

<div className="tasks">
{
  tasks.map((task)=>{
    return<Card id={task.id}
    key={task.id}
    text={task.text}
    handleComplete={handleComplete}/>
  })
}
</div>
        </>
    )
}


export default Tasks