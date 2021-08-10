import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'


function App() {
  // name of state, function to update a state
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointement',
        day: 'Feb 5th at 5:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    },
    ])

    // Delete Task
    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
    }

    // Toggle Reminder
    const toggleReminder = (id) => {
      setTasks(tasks.map((task) => ((task.id === id) ? {...task, reminder: !task.reminder} : task)))
      
    }


 
  return (
    // we can return only one parent element!
    <div className="container">
      <Header title='Something'/>
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : ('No Tasks To Show')}
    </div>
  );
}


export default App;



// Other way:
// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class</h1> 
//   }
// }