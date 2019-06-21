import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {create_contact}  from '../actions/makeContact';


class MakeContact extends React.Component {
     state = {
         name:'',
         email:'',
         relationship:'',
         phone:''
     }

     onChange = e =>{
          let name  = e.target.name
          let value =  e.target.value 
        this.setState({
                [name] : value
           })
     }

     onSubmit=(e)=>{
          e.preventDefault();
           
           this.props.create_contact(this.state)  

     }

      render(){
            return(
                <div className="container" id="helper">
                <form>
                <div className="form-group">
                  <label for="exampleInputEmail1">Contacts Name</label>
                  <input onChange={(e)=> this.onChange(e)} name="name" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="name" placeholder="Enter Contacts name"/>
                </div>
                <div className="form-group">
                  <label for="email">Contacts email</label>
                  <input onChange={(e)=> this.onChange(e)} type="email" className="form-control" id="exampleInputPassword1" placeholder="email" name="email"/>
                </div>
                <div className="form-grou">
                 <label for="email">Relationship</label>
                  <input onChange={(e)=> this.onChange(e)} type="text" className="form-control" id="exampleCheck1" name="relationship" placeholder="Enter relationship" />
                </div>
                <div className="form-group">
                 <label for="phone">Phone number</label>
                <input onChange={(e)=> this.onChange(e)} type="text" className="form-control" id="exampleCheck1" name="phone"  placeholder="xxx-xx-xxxx" />
                </div>
                <button  onClick={(e)=> this.onSubmit(e)} type="submit" className="btn btn-primary">Submit</button>
              </form>
              </div>
            )
      }
}

MakeContact.propTypes = {
     makeContact : PropTypes.func.isRequired,
}

const mapStateToProps  = state =>({
    data :  state.data
})



export default connect(mapStateToProps,{create_contact})(MakeContact)
