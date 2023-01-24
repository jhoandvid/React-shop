
import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Layout from "../container/Layout";
import Login from "../container/Login";
import Home from "../pages/Home";


import RecoveryPassword from "../container/RecoveryPassword";
import '../styles/global.css';
import NotFound from "../pages/NotFount";





const App=()=>{
    return(
        <BrowserRouter>
        <Switch>
            <Layout>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/recover-password" component={RecoveryPassword}/>
                <Route path="/not-found" component={NotFound}/>
            </Layout>
        </Switch>
        </BrowserRouter>
    
     
    )
}

export default App;