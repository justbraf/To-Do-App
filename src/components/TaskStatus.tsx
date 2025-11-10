interface TaskStatusProps {
    taskId: number,
    taskStatus: boolean,
    toggleComplete: (id: number) => void
}

const TaskStatus = ({ taskId, taskStatus, toggleComplete }: TaskStatusProps) => {

    const handleToggle = () => {
        toggleComplete(taskId)
    }

    return (
        <button onClick={handleToggle}>
            {taskStatus ? <i className="fa-regular fa-square-check text-xl relative top-3"></i> :
                <i className="fa-regular fa-square text-xl relative top-3"></i>}
        </button>
    )
}

export default TaskStatus