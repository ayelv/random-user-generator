import React from 'react'

const UserDetail = ({ user }) => {
    if (!user) {
        return <div>Loading...</div>
    }
    const userName = user.name.title + " " + user.name.first + " " + user.name.last;
    return (
        <div>
            <div>
                <img
                    src={user.picture.large}
                    alt=""
                />
            </div>
            <div>
                <div>Name: {userName}</div>
                <div>Email: {user.email}</div>
                <div>Gender: {user.gender}</div>
                <div>Cell: {user.cell}</div>
                <div>Nationality: {user.nat}</div>
            </div>
        </div>
    )
}

export default UserDetail