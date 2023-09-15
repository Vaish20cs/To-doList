import { useEffect, useState } from "react";

const Input = (props) => {
    const [enteredTask,setEnterTask] = useState ("")
    const [isValid,setIsValid]=useState(false)
    
    const handleChange = (event) => {
        //console.log(event.target.value)
        setEnterTask(event.target.value)
    }

    const handleSubmit=(event) =>{
        event.preventDefault()
        if(isValid)
        {
         props.addTask(enteredTask)
         setEnterTask("")
        }
        else{
            alert("please try atleast 3 characters...")
        }
    }

    useEffect(()=>{
        if(enteredTask.length<3)
        {
            //console.log("bad input")
            setIsValid(false)
        }
        else
        {
            //console.log("good input")
            setIsValid(true)
        }
    },[ enteredTask])
    return( 
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter task" className="task-input"  value={enteredTask} onChange={handleChange}/>
        
        <button type="submit" disabled={!isValid}> Add task </button>
    </form>    
    )
}

export default Input;