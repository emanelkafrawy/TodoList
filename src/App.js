import {React, Component} from 'react';
import TodoUsers from "./Components/TodoUsers/TodoUsers"
import AddUser from "./Components/AddUser/AddUser"

class App extends Component {
  state = {
    users:[
      {id:1, name: "eman", age:22},
      {id:2, name: "mohamed", age:50},
      {id:3, name: "kamel", age:70}
    ]
  }
  deleteUser =(id) =>{
    // console.log(id);
    // let users = this.state.users;
    // let i = users.findIndex(user => user.id === id)
    // users.splice(i, 1)//splice means delete and 1 means delete 1 only
    // this.setState({users})

    //another way
    let users = this.state.users.filter(user =>{
      return user.id !== id  //if return false so will remove
    })
    this.setState({users})
  }

  AddUser= (user) =>{
    user.id = Math.random()
    let users = this.state.users;
    users.push(user);
    this.setState({users})
  }
  render() { 
    return ( 
      <div className="App container">
          <h1 className="text-center">TodoUser App</h1>
          <TodoUsers users={this.state.users} deleteUser= {this.deleteUser}/>
          <AddUser addUser={this.AddUser}/>
      </div>
     );
  }
}
 
export default App;
