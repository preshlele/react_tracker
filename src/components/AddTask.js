import { useState } from "react"
const AddTask = ({onAdd}) => {
    const [text,setText] = useState('')
    const [day,setDay] = useState('')

const onSubmit=(e) =>{
    e.preventDefault()

if(!text||day){
    alert('Please add task and date')
}

onAdd(text,day)
setText('')
setDay('')

}
    return (


        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>

            <label>Task</label>
            <input type='text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)}/>
            </div>

            <div className='form-control'>
            <label>Date & Time</label>
            <input type='text' placeholder='Add Day' value={day} onChange={(e) => setDay(e.target.value)}></input>        
            
            </div> 
            <input type='button' value='Save Task' className='btn btn-block'></input>
           
           
        </form>
    )
}

export default AddTask
