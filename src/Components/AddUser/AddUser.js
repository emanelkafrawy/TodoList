import React, { Component } from 'react';
import './AddUser.css'

class AddUser extends Component {
    state = {
        age: '',
        name: ''
    }
    handleChange = (e) =>{
        // console.log(e.target.value);
        this.setState({
            [e.target.id]: e.target.value //e.taret.id = name / age -> the id from input and the state attributes
        })
    }
    handleSubmit =(e) =>{
        e.preventDefault();
        // console.log(this.state);
        if(e.target.name.value === ''){
            return false;
        }else{
            this.props.addUser(this.state)
            this.setState({
                name: '',
                age: ''
            })
        }
    }
    render() { 
        return (
            <div>
               <form onSubmit = {this.handleSubmit}> 
                   <input type="text" placeholder="Enter name.." id="name" onChange={this.handleChange}required value={this.state.name}/>
                   <input type="number" placeholder="Enter age.." id="age" onChange={this.handleChange}required value={this.state.age}/>
                   <input type="submit" value="Add" />
               </form>
            </div>
        );
    }
}
 
export default AddUser;