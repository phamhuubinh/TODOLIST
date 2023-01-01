import React, { useEffect, useState } from "react";
import Control from "./components.js/Control";
import Form from "./components.js/Form";
import ListTask from "./components.js/ListTask";
import Title from "./components.js/Title";

const App = () => {
  const [open, setOpen] = useState(false);
  const [listTask, setListTask] = useState(() => {
    const store = JSON.parse(localStorage.getItem('listTask'))
    return store
  })
  const [task, setTask] = useState('')
  const [actionName, setActionName] = useState('')

  const handleOpen = (open) => {
    setOpen(open)
  }

  const handleClose = (close, actionName) => {
    setOpen(close)
    setActionName(actionName)
  }

  const newTask = (name, level, id) => {
    setListTask(prev => {
      const newTask = [...prev, { name, level, id }]
      localStorage.setItem('listTask', JSON.stringify(newTask))
      return newTask
    })
    setOpen(false)
  }

  const handleEdit = (task, actionName) => {
    setOpen(true)
    setTask(task)
    setActionName(actionName)
  }

  const handleUpdate = (name, level, id, actionName) => {
    const newTask = { name, level, id }
    const newListTask = [...listTask,]
    for (let index = 0; index < newListTask.length; index++) {
      if (newListTask[index].id === newTask.id) {
        newListTask[index] = newTask;
      }
    }
    localStorage.setItem('listTask', JSON.stringify(newListTask))
    setListTask(newListTask)
    setActionName(actionName)
    setOpen(false)
  }

  const handleDelete = (task) => {
    const listTaskFilter = listTask.filter(item => item.name !== task.name)
    localStorage.setItem('listTask', JSON.stringify(listTaskFilter))
    setListTask(listTaskFilter)
  }

  const handleSearchData = (data) => {
    const listTaskSearch = [...listTask]
    const newListTaskSearch = listTaskSearch.filter(item => item.name.toLocaleLowerCase().includes(data.toLocaleLowerCase()))
    setListTask(newListTaskSearch)
  }

  const handleSort = (sortField, sortBy) => {
    /* setSortField(sortField)
    setsortBy(sortBy) */
    const listTaskSort = [...listTask]
    if (sortField === "Name ") {
      if (sortBy === " ASC") {
        listTaskSort.sort((a, b) => (a.name > b.name ? 1 : -1))
        setListTask(listTaskSort);
      } else { // DESC
        listTaskSort.sort((a, b) => (a.name > b.name) ? -1 : (a.name > b.name) ? 1 : 0)
        setListTask(listTaskSort);
      }
    } else if (sortField === "Level ") {
      if (sortBy === " ASC") {
        listTaskSort.sort((a, b) => (a.level > b.level ? 1 : -1))
        setListTask(listTaskSort);
      } else {// DESC
        listTaskSort.sort((a, b) => (a.level > b.level) ? -1 : (a.level > b.level) ? 1 : 0)
        setListTask(listTaskSort);
      }
    }
  }

  return (
    <div className="container">
      {/* TITLE : START */}
      <Title />
      {/* TITLE : END */}
      {/* CONTROL (SEARCH + SORT + ADD) : START */}
      <Control open={handleOpen} searchData={handleSearchData} sort={handleSort} />
      {/* CONTROL (SEARCH + SORT + ADD) : END */}
      {/* FORM : START */}
      {open ?
        <Form
          newTask={newTask}
          task={task}
          actionName={actionName}
          close={handleClose}
          updateTask={handleUpdate}
        />
        : ''}
      {/* FORM : END */}
      {/* LIST : START */}
      <ListTask listTask={listTask} deleteTask={handleDelete} editTask={handleEdit} />
      {/* LIST : END */}
    </div>
  );
}

export default App;