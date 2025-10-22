import AddTask from "./components/AddTask"
import ListItem from "./components/ListItem"
import { useState } from "react"

function App() {
  // define state variable for tasks with sample task
  const [tasks, setTasks] = useState([{
    id: 1,
    task: "Sample Task",
    completed: false,
    createdOn: new Date()
  },])

  // function to add new task to existing tasks array
  const addNewTask = (taskDetails) => {
    const newTask = {
      id: tasks.length + 1,
      task: taskDetails,
      completed: false,
      createdOn: new Date()
    }
    // the spread operator ()...) is used to create a new array with existing tasks and the new task
    setTasks([...tasks, newTask])
  }

  return (
    <div className="h-screen w-screen flex justify-center bg-stone-100">
      <div className="flex flex-col items-center mx-24 mt-10 w-3xl">
        <div className="text-2xl mb-4">TODO LIST</div>
        <div className="flex w-full justify-between">
          <div>
            <button className="bg-blue-600 p-2 rounded-lg text-white hover:bg-blue-400 cursor-pointer">Add Task</button>
          </div>
          <div>
            <select name="filter" id="filterList" className="bg-slate-300 p-2 rounded-lg text-black hover:bg-slate-200 cursor-pointer">
              <option selected value="all">All</option>
              <option value="done">Done</option>
              <option value="unfinished">Not Finished</option>
            </select>
          </div>
        </div>
        {/* end btns */}
        {/* pass add new task function to child component */}
        <AddTask addNewTask={addNewTask} />
        <div className="bg-slate-300 w-full rounded-lg mt-4 px-8 py-6">
          {/* iterate over all the elements of the array and pass them to the child component */
            tasks.map((task) => (
              <ListItem key={task.id} task={task} />
            ))}
        </div>
        {/* end list */}
      </div>
    </div>
  )
}

export default App
