import React, { Component } from 'react';
import View from './view'

class Task extends Component {
    constructor() {
        super();
        this.state = {
            task: "",
            editedTask: "",
            priority: "alert alert-danger",
            newPriority: "alert alert-danger",
            data:[],
            newData:[],
            edit: false,
            id:0,
            done:false
        };
        this.updateState = this.updateState.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.updatePriority = this.updatePriority.bind(this)
        this.toggleItemEditing = this.toggleItemEditing.bind(this);
        this.updateTask = this.updateTask.bind(this)
        this.deleteThisTask = this.deleteThisTask.bind(this)
        this.updateNewPriority = this.updateNewPriority.bind(this)
        this.saveTask = this.saveTask.bind(this)
        this.completedTask = this.completedTask.bind(this)
    }
    updateState(e) {

        this.setState({
            task: e.target.value,   
        });
        
      
    }
  
   
    
    updateTask(e) {
        this.setState({
        editedTask: e.target.value
        })
      
    }
    updatePriority(e) {
        this.setState({
        priority: e.target.value,
        })
       
    }
    updateNewPriority(e) {
        this.setState({
        newPriority: e.target.value
        })
  
    }    
    deleteThisTask(index) { 
    const data = this.state.data.slice()
    data.splice(index,1)
    this.setState({
        data:data
    });
   console.log(index)
  }
    
    
    saveTask(id,editedTask,newPriority) {
        let tempList = this.state.data
        editedTask = this.state.editedTask
        newPriority= this.state.newPriority

  
        tempList.forEach((item,index) => {
          if (id==index) {
            item.priority = newPriority
            item.task = editedTask
            item.edit = false; 
          }
          this.setState ({
            data:tempList
          })
          console.log(editedTask)
      })
      

    }  

    toggleItemEditing(id){
        let editList = this.state.data
        editList.forEach((item,index) => {
          if (id==index) {
            item.edit = true;
          }
          this.setState ({
            data: editList
          })
      })
     
      }
       
    completedTask(){
        this.setState({
            done:true
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const id = this.state.id++
        const task = (this.state.task)
        const edit = false
        const done = false
        const priority = (this.state.priority)
        const savedTask = {task: task, priority: priority,id:id, edit:edit, done:done}
        const data = this.state.data
        data.push(savedTask);
        // console.log(data)
        
        this.setState({
            task:task,
            data:data,
      
        })
    
        console.log(data)
    }
    
    
    
    

      
  


    render() {
        
       
        return (
            <View 
            toggleItemEditing={this.toggleItemEditing}saveTask={this.saveTask}
            updateState={this.updateState} deleteThisTask={this.deleteThisTask}
            updateTask={this.updateTask} updatePriority={this.updatePriority} handleSubmit={this.handleSubmit}  
            {...this.state} updateNewPriority={this.updateNewPriority} completedTask={this.com}/>
        )

    }
}
export default Task;