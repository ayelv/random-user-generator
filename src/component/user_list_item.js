import React from "react"

const UserListItem = ({user, onUserSelect}) => {
    const name = user.name.title + 
        ". " +user.name.first +
        " " + user.name.last;
    const nat = user.nat;
    const gender = user.gender;
    return(
        <li 
        onClick={() => onUserSelect(user)}
        className="list-group-item">
            <div className="card">
                <div className="card-title">{name}</div>
                <div className="card-text">{nat}</div>
                <div className="card-text">{gender}</div>
            </div>
        </li>
        )
}

export default UserListItem