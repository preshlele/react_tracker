
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';



import {useState} from 'react'

const App = () =>{
  const[showAddTask, setshowAddTask] = useState(false)

  const [tasks, setTasks]= useState([
    {
        id: 1,
        text:'Dentist appointment',
        day: '20th Jan at 1:45pm',
        reminder: true,

    }, 
    {
        id: 2,
        text:'Interview with Mercy',
        day: '20th Oct at 9:45pm',
        reminder: true,

    }, 
    {
        id: 3,
        text:'Play fifa',
        day: '19th Dec at 6:45pm',
        reminder: false,

    }, 
   

])

//add task
const addTask = (task)=> {
  console.log(addTask)

}
//delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !==id ))
 }

 //toggle reminder
 //const toggleReminder=(id) => {
//console.log(id)
 //}
 
  
  return (
    <div className="container">
      <Header onAdd ={()=> setshowAddTask(!showAddTask)} 
       title='Task Tracker'/>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /*onToggle={toggleReminder}*//> :('No task to show')}
    { showAddTask &&  <AddTask onAdd={addTask }/>}
      

      
    </div>
  );
}

export default App;
