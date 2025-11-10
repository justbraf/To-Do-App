interface DeleteItemProps {
    taskId: number,
    delTask: (id: number) => void
}

const DeleteItem = ({ taskId, delTask }: DeleteItemProps) => {
    const handleDelete = () => {
        delTask(taskId)
    }
    return (
        <>
            <i className="fa-solid fa-trash text-xl relative top-3 mx-2" onClick={handleDelete}></i>
        </>
    )
}

export default DeleteItem