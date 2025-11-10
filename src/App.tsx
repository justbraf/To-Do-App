import { useState } from "react"
import AddTask from "./components/AddTask"
import EditTask from "./components/EditTask"
import ListItem from "./components/ListItem"

function App() {
  // state variable for tasks with sample task
  const [tasks, setTasks] = useState([{
    id: 1,
    task: "Sample Task",
    completed: false,
    createdOn: new Date()
  },])

  // state variable to hold task being edited
  const [taskToEdit, setTaskToEdit] = useState({
    id: 0,
    task: ""
  })

  // use state variables to control visibility of add and edit task components
  const [showAddTask, setShowAddTask] = useState(false)
  const [showEditTask, setShowEditTask] = useState(false)

  const showAddTaskComponent = () => {
    setShowAddTask(!showAddTask)
  }

  const showEditTaskComponent = (state: boolean) => {
    setShowEditTask(state)
  }

  // function to add new task to existing tasks array
  const addNewTask = (taskDetails: string) => {
    const newTask = {
      id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      task: taskDetails,
      completed: false,
      createdOn: new Date()
    }
    // the spread operator (...) is used to create a new array with existing tasks and the new task
    setTasks([...tasks, newTask])
  }

  // find the task by its id and update its details
  const updateTask = (taskId: number, taskDetails: string) => {
    const updTasks = tasks.map((task) => {
      if (task.id === taskId)
        task.task = taskDetails
      return task
    })
    setTasks(updTasks)
  }

  // find a task by its id and remove it from the tasks array
  const deleteTask = (taskId: number) => {
    // filter method is used to create a new array excluding the task with the specified id
    const updTasks = tasks.filter((task) => {
      return task.id !== taskId
    })
    setTasks(updTasks)
  }

  // toggle the completed status of a task
  const toggleComplete = (taskId: number) => {
    const updTasks = tasks.map((task) => {
      if (task.id === taskId) {
        // deconstruct the task into its individual key/value pairs and toggle completed status
        return { ...task, completed: !task.completed }
      }
      return task
    })
    setTasks(updTasks)
  }



  return (
    <div className="h-screen w-screen flex justify-center bg-stone-100">
      <div className="flex flex-col items-center mx-24 mt-10 w-3xl">
        <div className="text-2xl mb-4">TODO LIST</div>
        {/* buttons */}
        <div className="flex w-full justify-between">
          <div>
            <button className="bg-blue-600 p-2 rounded-lg text-white hover:bg-blue-400 cursor-pointer" onClick={showAddTaskComponent}>Add Task</button>
          </div>
          <div>
            <select name="filter" id="filterList" className="bg-slate-300 p-2 rounded-lg text-black hover:bg-slate-200 cursor-pointer">
              <option defaultValue="all">All</option>
              <option value="done">Done</option>
              <option value="unfinished">Not Finished</option>
            </select>
          </div>
        </div>
        {/* end buttons */}
        {/* pass add new task function to the child component */}
        <AddTask addNewTask={addNewTask} showAddTask={showAddTask} showAddTaskComponent={showAddTaskComponent}/>
        {/* pass the task to be edited state variable and its setter method, and the update function to the child component*/}
        <EditTask taskToEdit={taskToEdit} setTaskToEdit={setTaskToEdit} updateTask={updateTask} showEditTask={showEditTask} showEditTaskComponent={showEditTaskComponent}/>
        <div className="bg-slate-300 w-full rounded-lg mt-4 px-8 py-6">
          {tasks.length === 0 ?
            <div className="text-center">No Tasks Added</div>
            :
            /* iterate over all the elements of the array and pass them to the child component */
            tasks.map((task) => (
              // the key prop is a special string attribute that needs to be included when creating lists of elements and is used by React to identify which items have changed, are added, or are removed
              <ListItem key={task.id} task={task} delTask={deleteTask} toggleComplete={toggleComplete} setEdit={setTaskToEdit} showEditTaskComponent={showEditTaskComponent}/>
            ))}
        </div>
        {/* end list */}
      </div>
    </div>
  )
}

export default App
