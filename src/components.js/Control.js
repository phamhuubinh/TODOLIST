import React, { useState } from "react";

const Control = (props) => {
    const [valueInput, setValueInput] = useState('')
    const [sort, setSort] = useState('')

    const handleOpen = () => {
        props.open(true)
    }

    const handleValueInput = (e) => {
        setValueInput(e.target.value)
    }

    const handleSearch = () => {
        if (valueInput !== '') {
            props.searchData(valueInput)
        } else {
            /* alert('Vui lòng nhập dữ liệu tìm kiếm') */
            window.location.reload()
        }
    }

    const handleSort = (e) => {
        let value = e.target.innerHTML
        setSort(value)
        let arr = value.split('-')
        props.sort(arr[0], arr[1])
    }

    return (
        <div className="row">
            {/* SEARCH : START */}
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search for..."
                        value={valueInput}
                        onChange={handleValueInput}
                    />
                    <span className="input-group-btn">
                        <button className="btn btn-info" type="button" onClick={handleSearch}>
                            Go!
                        </button>
                    </span>
                </div>
            </div>
            {/* SEARCH : END */}
            {/* SORT : START */}
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div className="dropdown">
                    <button
                        className="btn btn-default dropdown-toggle"
                        type="button"
                        id="dropdownMenu1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
                    >
                        {sort ? sort : 'Sort by'}
                        <span className="caret" />
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li>
                            <a role="button" href="/#" onClick={handleSort}>Name - ASC</a>
                        </li>
                        <li>
                            <a role="button" href="/#" onClick={handleSort}>Name - DESC</a>
                        </li>
                        <li role="separator" className="divider" />
                        <li>
                            <a role="button" href="/#" onClick={handleSort}>Level - ASC</a>
                        </li>
                        <li>
                            <a role="button" href="/#" onClick={handleSort}>Level - DESC</a>
                        </li>
                    </ul>
                    <span className="label label-success label-medium" style={{ textTransform: 'uppercase' }}>{sort ? sort : 'NAME - DESC'}</span>
                </div>
            </div>
            {/* SORT : END */}
            {/* ADD : START */}
            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                <button
                    type="button"
                    className="btn btn-info btn-block"
                    onClick={handleOpen}
                >
                    Add Task
                </button>
            </div>
            {/* ADD : END */}
        </div>
    )
}

export default Control;