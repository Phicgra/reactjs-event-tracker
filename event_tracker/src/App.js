import Button from "./components/Button";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState, useEffect} from "react"
import AddTask from "./components/AddTask";


function App() {


  const [showAddTask, SetShowAddTask] = useState(true)
  useEffect(() => {
    const getTasks =async () => {
      const taskFromServer = await fetchTasks()
      setTasks(taskFromServer)
    }
    getTasks()
  }, [])

  const fetchTasks = async () => {
    const res = await fetch ('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }

  const fetchTask = async (id) => {
    const res = await fetch (`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  }


  const [tasks, setTasks] = useState([])
     
    const addTask = async(task) => {
      const res = await fetch ('http://localhost:5000/tasks', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(task),
      })

        const data = await res.json()
        setTasks([...tasks, data ]) 


    //     // console.log(task)
    //     const id = Math.floor(Math.random() * 10000) + 1

    //     const newTask = {id, ...task}
    //     setTasks([...tasks, newTask])
    //     console.log(newTask)

    }

    const deleteTask = async(id) => {
      // console.log('delete', id );

      await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'DELETE'
      })
      setTasks(tasks.filter((task) => task.id !== id))

    }


    const toggleReminder = async(id) => {
      // const taskToToggle = async(id) => {
        const taskToToggle = await fetchTask(id)
        const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder}
        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
          method:'PUT',
          headers:{
            'content-type': 'application/json'
          },
          body:JSON.stringify(updTask),
        })
      // }

      const data = await res.json()
      setTasks(tasks.map((task) => task.id === id ? {...task, reminder: data.reminder} : task))
    }

  return (
    <div className="container">
      <Header title="reactjs" onAdd={()=>SetShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Task for Today! Enjoy your day Boss.'} 
    </div>
  );
}

export default App;
