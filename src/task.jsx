import React, { Component } from 'react';
import View from './view'

class Task extends Component {
    constructor() {
        super();
        this.state = {
            task: "",
            priority:"",
            

        };
       this.updateState = this.updateState.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this)
       this.updatePriority = this.updatePriority.bind(this)
    }
    updateState(e) {
        this.setState({
            task: e.target.value,
            
        });
    }    
    updatePriority(e) { 
        this.setState({
            priority: e.target.value
        })
    }    
       
    
    handleSubmit(event) {
    
        console.log('task: ' + this.state.task);
        console.log(this.state.priority)
        event.preventDefault();

        
      }

    
      


    render() {
        return (
            <View updateState={this.updateState} updatePriority={this.updatePriority} handleSubmit={this.handleSubmit} {...this.state} />
        )

    }
}          
export default Task;