import React, { Component } from 'react';


function View(props) {
    var level = {
        1: "alert alert-success",
        2: "alert alert-warning",
        3: "alert alert-danger"
     }
    return (
        <div className='container-fluid'>
            <div className="row-fluid">
                <div className="col-sm-3">
                    <div className="page-header">
                        <p className="border">Add New todo</p>
                    </div>
                    <label>I want to:
                       <textarea className="create-todo-text" onChange={props.updateState} defaultValue={props.task} cols="30" rows="10"></textarea>
                    </label>
                    <div className="form-group">
                        <label htmlFor="priority">How much of a priority is this?</label>
                        <select className="form-control create-todo-priority" onChange={props.updatePriority} value={props.priority} placeholder="select a priority">
                            <option value="3">High</option>
                            <option value="2">Medium</option>
                            <option value="1">Low</option>
                        </select>
                        <div>
                            <button onClick={props.handleSubmit} onChange={props.updateState} className="create-todo">Add</button>
                        </div>

                    </div>
                </div>
            </div>
            <div className="col-sm-3">
                <ul className="list-group">{props.data.map((item, index) =>
                    <li className={level[item.priority]} id={item.id} key={index} value={props.task} >{item.task}
                        <button className="edit-todo" onClick={() => props.toggleItemEditing(index)} aria-hidden="false">Edit</button>
                        <button className="delete-todo" onClick={() => props.deleteThisTask(index)} aria-hidden="false">Delete</button>
                                          
              {!item.edit ? (
                            <span></span>
                        ) : (
                                <div>
                                    <textarea className='update-todo-text' name='item' value={props.editedTask} onChange={props.updateTask}></textarea>
                                    <select className='update-todo-priority' name='priority' value={props.newPriority} onChange={props.updateNewPriority}>
                                        <option value='3'>High</option>
                                        <option value='2'>Medium</option>
                                        <option value='1'>Low</option>
                                    </select>
                                    <button className='update-todo' value={props.editedTask} onClick={() => props.saveTask(index)}>Save</button>
                                </div>

                            )}
                    </li>)}</ul>

            </div>


        </div>
    );
}



export default View;