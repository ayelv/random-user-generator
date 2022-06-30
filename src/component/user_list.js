import React from "react"
import UserListItem from "./user_list_item"

const UserList = (props) => {
    const userItems = props.users.map(
        (user,index) => {
            return <UserListItem 
                        className="card-body"
                        key={index}
                        user={user}
                        onUserSelect={props.onUserSelect}
                    />
        }
    )
    
    return <ul className="list-group">{userItems}</ul>
}

export default UserList