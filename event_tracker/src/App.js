import Button from "./components/Button";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"


function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Go to the gym",
      day: "1st Dec, 2023",
      reminder: true,
    },
    {
      id: 2,
      text: "Build your prayer life",
      day: "1st Dec, 2023",
      reminder: true,
    },
    {
      id: 3,
      text: "Save up for Christmas",
      day: "8th Dec, 2023",
      reminder: false,
    },
    {
      id: 4,
      text: "Go shopping with friends and family",
      day: "10th Dec, 2023", 
      reminder: true,
    },
    {
      id: 5,
      text: "Complete your React tutorials",
      day: "14th Dec, 2023",
      reminder: true,
    }])

    const deleteTask =(id) => {
      // console.log('delete', id );
      setTasks(tasks.filter((task) => task.id !== id))

    }
    const toggleReminder = (id) => {
      // console.log(id)
      setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
    }
  return (
    <div className="container">
      <Header title="reactjs"/>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Task for Today! Enjoy your day Boss.'} 
    </div>
  );
}

export default App;
