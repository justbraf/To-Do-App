interface EditItemProps {
    taskId: number,
    taskDetails: string,
    setEdit: (editTask: { id: number, task: string }) => void,
    showEditTaskComponent: (state: boolean) => void
}

const EditItem = ({ taskId, taskDetails, setEdit, showEditTaskComponent }: EditItemProps) => {
    const handleSetEdit = () => {
        setEdit({
            id: taskId,
            task: taskDetails
        });
        showEditTaskComponent(true)
    }
    return (
        <>
            <i onClick={handleSetEdit} className="fa-solid fa-pen text-xl relative top-3 mx-2 cursor-pointer"></i>
        </>
    )
}

export default EditItem