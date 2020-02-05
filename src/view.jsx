import React, { Component } from 'react';
import Task from './task'

function View(props) {

    return (
        <div className='container-fluid'>
            <div className="row-fluid">
                <div className="col-sm-3">
                    <div className="page-header">
                        <p className="border">Add New todo</p>
                    </div>
                    <label>I want to:
                       <textarea className="create-todo-list" onChange={props.updateState} value={props.task} cols="30" rows="10"></textarea>
                    </label>
                    <div className="form-group">
                        <label htmlFor="priority">How much of a priority is this?</label>
                        <select className="form-control" onChange={props.updatePriority} value={props.priority} placeholder="select a priority">
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                        <div>
                            <button onClick={props.handleSubmit} className="btn btn-primary btn-lg">Add</button>
                        </div>
                        <div className="col-sm-9">
                            


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default View;