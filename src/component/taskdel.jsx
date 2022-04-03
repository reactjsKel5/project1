import React from "react";

function Task(props) {
    return (
        <div className="form-check mb-4">
            <input className="form-check-input" type="checkbox" value="status" id="status" />
            <label className="form-check-label ms-3" for="task1">
                {props.task}
            </label>
            <button className="btn-delete float-end" onClick={
                () => {
                    props.delete(props.id)
                }
            }>
                <ion-icon name="trash-outline"></ion-icon>
            </button>
        </div>
    );
}

export default Task;
