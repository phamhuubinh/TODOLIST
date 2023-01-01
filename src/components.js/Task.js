import React from "react";

const Task = (props) => {
    let { task, index, deleteTask, editTask } = props

    const handleDelete = () => {
        deleteTask(task)
    }

    const handleEdit = () => {
        editTask(task, 'Update')
    }

    return (
        <tbody>
            <tr>
                <td className="text-center">{index + 1}</td>
                <td>{task.name}</td>
                <td className="text-center">
                    <span className="label label-danger">{task.level}</span>
                </td>
                <td>
                    <button
                        type="button"
                        className="btn btn-warning"
                        onClick={handleEdit}
                    >
                        Edit
                    </button>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={handleDelete}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        </tbody>
    )
}

export default Task;