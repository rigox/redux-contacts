import React from 'react'
import Navbar from './layout/Navbar'
import Home from './Home';
import MakeContact from './MakeContact';
import Contacts  from './Contacts'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Provider}  from 'react-redux'
import store  from '../store';
//import styles
import '../App.css';

class App extends React.Component{
    
    render(){
        return (
        <Provider store={store} >
        <div>
        <BrowserRouter>
           <Navbar/>
           <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/make_contact"  component={MakeContact}/>
            <Route  exact path="/view_contacts"  component={Contacts} />
            </Switch>
        </BrowserRouter>
        </div>
      </Provider>
    )
}
}

export default App
