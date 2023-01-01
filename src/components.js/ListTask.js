import React from "react";
import Task from "./Task";

const ListTask = (props) => {
    let { listTask, deleteTask, editTask } = props

    const handleDelete = (task) => {
        deleteTask(task)
    }

    const handleEdit = (task, actionName) => {
        editTask(task, actionName)
    }

    let elementTask = listTask?.map((item, index) => {
        return (
            <Task
                key={index}
                task={item}
                index={index}
                deleteTask={handleDelete}
                editTask={handleEdit}
            />
        )
    })
    return (
        <div className="panel panel-success">
            <div className="panel-heading">List Task</div>
            <table className="table table-hover ">
                <thead>
                    <tr>
                        <th style={{ width: "10%" }} className="text-center">
                            #
                        </th>
                        <th>Task</th>
                        <th style={{ width: "20%" }} className="text-center">
                            Level
                        </th>
                        <th style={{ width: "20%" }}>Action</th>
                    </tr>
                </thead>
                {elementTask}
            </table>
        </div>
    )
}

export default ListTask;