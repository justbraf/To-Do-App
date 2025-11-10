import type React from "react"

interface AddTaskProps {
    addNewTask: (task: string) => void,
    showAddTask: boolean,
    showAddTaskComponent: () => void
}

// destructuring props directly in the function parameters
const AddTask = ({ addNewTask, showAddTask, showAddTaskComponent }: AddTaskProps) => {
    // the e parameter represents the event object
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        console.log(e.currentTarget.task.value)
        // check if the input field is empty
        if (!e.currentTarget.task.value)
            return
        addNewTask(e.currentTarget.task.value)
        e.currentTarget.task.value = ""
        showAddTaskComponent()
    }

    const handleCancel = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        e.currentTarget.form.task.value = ""
        showAddTaskComponent()
    }

    return (
        // dynamically set the class name based on the showAddTask prop using string concatenation
        <div className={"w-6/8 " + (showAddTask ? "" : "hidden")}>
            <form onClick={handleSubmit} onReset={handleCancel}>
                <div className="flex my-2">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        <i className="fa-solid fa-file-pen"></i>
                    </span>
                    <input type="text" id="task" className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Go shopping for..." />
                </div>
                {/* <div>
                    <label htmlFor="task" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Task Details</label>
                    <input type="text" id="task" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2 cursor-pointer dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div> */}
                <div className="flex justify-end">
                    <button className="cursor-pointer border-blue-400 border-2 w-32 p-2 text-center rounded-lg hover:bg-blue-600 hover:text-white" type="submit">Add New Task</button>
                    <button className="cursor-pointer ml-3 bg-red-500 border-2 w-32 p-2 text-center text-white rounded-lg hover:text-red-500 hover:border-red-500 hover:bg-white" type="reset" >Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default AddTask