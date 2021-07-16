import React from 'react';
import './TodoUsers.css'

const TodoUsers =(props) =>{
    const {deleteUser, users} = props; //القوسين عشان اقوله هات البروب الي اسمها يوزرس
    const usersLength = users.length
    const ListUsers = usersLength?
     users.map(user =>{
        return (
            <div key={user.id} className="ListUsers">
                <span className="name">{user.name}</span>
                <span className="age">{user.age}</span>
                <span className="action icon"onClick={() => deleteUser(user.id)}>&times;</span>
            </div>
        )
    }): (<p>there is no item</p>)

    return(
        
            <div>
                <div className="ListUsers">
                    <span className="name title">Name</span>
                    <span className="age title">Age</span>
                    <span className="action title">Action</span>
                </div>
                {ListUsers}
            </div>
    
    )
}

export default TodoUsers;