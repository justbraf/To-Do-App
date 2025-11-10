import type React from "react"

interface EditTaskProps {
    taskToEdit: {
        id: number,
        task: string
    },
    setTaskToEdit: (editTask: { id: number, task: string }) => void,
    updateTask: (id: number, updatedTask: string) => void,
    showEditTask: boolean,
    showEditTaskComponent: (state: boolean) => void
}

const EditTask = ({ taskToEdit, setTaskToEdit, updateTask, showEditTask, showEditTaskComponent }: EditTaskProps) => {
    // the parameter e is of type React.FormEvent which represents the event object for form submissions in React.
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        updateTask(taskToEdit.id, taskToEdit.task)
        showEditTaskComponent(false)
    }

    const handleCancel = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        e.currentTarget.form.task.value = ""
        showEditTaskComponent(false)
    }

    // the paarameeter e is of type React.ChangeEvent<HTMLInputElement> which represents the event object for input field changes in React.
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaskToEdit({
            ...taskToEdit,
            task: e.target.value

        })
    }

    return (
        // dynamically set the class name based on the showEditTask prop using template literals
        <div className={`w-6/8 ${showEditTask ? "" : "hidden"}`}>
            <form onClick={handleSubmit} onReset={handleCancel}>
                <div className="flex my-2">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        <i className="fa-solid fa-pen-clip"></i>
                    </span>
                    <input type="text" id="task" value={taskToEdit.task} onChange={handleChange} className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="task details" />
                </div>
                {/* <div>
                    <label htmlFor="task" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Task</label>
                    <input type="text" id="task" value={taskToEdit.task} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2 cursor-pointer dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div> */}
                <div className="flex justify-end">
                    <button className="cursor-pointer border-blue-400 border-2 w-32 p-2 text-center rounded-lg hover:bg-blue-600 hover:text-white" type="submit">Save Changes</button>
                    <button className="cursor-pointer ml-3 bg-red-500 border-2 w-32 p-2 text-center text-white rounded-lg hover:text-red-500 hover:border-red-500 hover:bg-white" type="reset">Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default EditTask