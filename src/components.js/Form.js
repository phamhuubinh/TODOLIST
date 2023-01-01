import React, { useEffect, useState } from "react";

const Form = (props) => {
    let { actionName } = props
    const [name, setName] = useState('')
    const [level, setLevel] = useState('')
    const [id, setId] = useState('')

    const handleSubmit = () => {
        if (actionName !== 'Update') {
            if (name !== '' && level !== '') {
                props.newTask(name, level, id)
                setName('')
                setLevel('')
            } else if (name === '') {
                alert('Vui lòng nhập thông tin')
            } else if (level === '') {
                alert('Vui lòng chọn level')
            }
        } else {
            props.updateTask(name, level, id, 'Submit')
            setName('')
            setLevel('')
        }
    }

    const handleClose = () => {
        setName('')
        setLevel('')
        props.close(false, 'Submit')
    }

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleLevel = (e) => {
        setLevel(e.target.value)
    }

    useEffect(() => {
        if (actionName === 'Update') {
            let { task } = props
            setName(task.name)
            setLevel(task.level)
            setId(task.id)
        }
        if (actionName !== 'Update') {
            setId(Math.floor(Math.random() * 100) + 1)
        }
    }, [])

    return (
        <div className="row">
            <div className="col-md-offset-7 col-md-5">
                <form action="" method="POST" className="form-inline">
                    <div className="form-group">
                        <label className="sr-only" htmlFor="">
                            label
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Task Name"
                            value={name}
                            onChange={handleName}
                        />
                    </div>
                    <div className="form-group">
                        <label className="sr-only" htmlFor="">
                            label
                        </label>
                        <select
                            name="ds"
                            id="inputDs"
                            className="form-control"
                            required="required"
                            value={level}
                            onChange={handleLevel}
                        >
                            Small
                            <option>--Level--</option>
                            <option>Medium</option>
                            <option>High</option>
                        </select>
                    </div>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleSubmit}
                    >
                        {actionName ? actionName : 'Submit'}
                    </button>
                    <button
                        type="button"
                        className="btn btn-default"
                        onClick={handleClose}
                    >
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Form;