import React from 'react'
import Card from './Card';
import  {connect} from 'react-redux'
import PropTypes from 'prop-types'


class Contacts extends  React.Component {
    
    state  ={}
    componentWillMount(){
          this.renderCards()
    }
    
    renderCards = ()=>{
          let temp =  this.props.contacts
          let list =  temp.map((x)=>{
                return <Card key={`${x.id}`} id={x.id} name={x.data.name} email={x.data.email} relationship={x.data.relationship} phone={x.data.phone} />
          })

          return list
    }

    removeContact = ()=>{
        let temp = this.props.contacts;
    }

    render(){
          return(
               <div>
                    {this.renderCards()}
               </div>
          )
     }
}


function mapStatetToProps(state){
     return{
          contacts:state.contacts
     }
}

export default connect(mapStatetToProps)(Contacts)
