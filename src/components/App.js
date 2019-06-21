import React from 'react'
import Navbar from './layout/Navbar'
import Home from './Home';
import MakeContact from './MakeContact';
import Contacts  from './Contacts'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

//import styles
import '../App.css';

class App extends React.Component{
    
    render(){
        return (
        <div>
        <BrowserRouter>
           <Navbar/>
            <Route exact path="/" component={Home} />
            <Route exact path="/make_contact"  component={MakeContact}/>
            <Route  exact path="/view_contacts"  component={Contacts} />
        </BrowserRouter>
        </div>
    )
}
}

export default App
