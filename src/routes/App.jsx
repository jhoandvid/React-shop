
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
         <Layout>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/recover-password" component={RecoveryPassword}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </Layout>
        </BrowserRouter>
    
     
    )
}

export default App;