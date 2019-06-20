import React from 'react'
import Navbar from './layout/Navbar'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

class App extends React.Component{
    
    render(){
        return (
        <div>
        <BrowserRouter>
           <Navbar/>

        </BrowserRouter>
        </div>
    )
}
}

export default App
