import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {removeContact}  from '../actions/removeContact';

const Card = ({a,name,email,relationship,phone,removeContact}) => {
    return (
            <div className="card container" >
                <div className="card" style={{"width":"18rem"}}>
                    <img src="https://www.sealandmaersk.com/-/media/sl2/images/icons/phone_icon.png?w=&h=&hash=85407240B0774990E53CBA8AFAC774823AD9C32B" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        </div>
                        <ul className="list-group list-group-flush">
            <li className="list-group-item"> <i class="fas fa-envelope padhelp"></i>{email}</li>
           <li className="list-group-item"><i class="fas fa-phone padhelp"></i>{phone}</li>
        <li className="list-group-item"><i class="fas fa-users padhelp"></i>{relationship}</li>
                        </ul>
                        <div className="card-body">
                        <button onClick={(e)=> removeContact(a)}  className="btn btn-dark">Delete</button>
                    </div>
                </div>
        </div>
    )
}

Card.propTypes = {
    Card : PropTypes.func.isRequired,
}



function mapStateToProps(state){
     return{
          id:state.id
     }
}


export default connect(mapStateToProps,{removeContact})(Card);
