import React from 'react'


const Card = ({name,email,relationship,phone}) => {
    return (
            <div className="card container" >
                <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <ul>
                    <li>{email}</li>
                    <li>{relationship}</li>
                    <li>{phone}</li>
                </ul>
                < button className="btn btn-dark">Delete</button>
            </div>
        </div>
    )
}

export default Card
