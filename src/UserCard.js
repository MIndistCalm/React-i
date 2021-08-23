import React from 'react'

const UserCard = ({name, description}) => {
    return  <div>
                <h3>{ name }</h3>
                <p>{ description }</p>
            </div>
}


export default UserCard;