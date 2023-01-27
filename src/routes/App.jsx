
import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Layout from "../container/Layout";

import Home from "../pages/Home";

import '../styles/global.css';
import NotFound from "../pages/NotFount";
import Login from "../pages/Login";
import RecoveryPassword from "../pages/RecoveryPassword";
import NewPassword from "../pages/NewPassword";
import MyAccount from "../pages/MyAccount";
import CreateAccount from "../pages/CreateAccount";
import Checkout from "../pages/Checkout";
import Orders from "../pages/Order";
import SendEmail from "../pages/SendEmail";

import AppContext from "../context/AppContext";

import useInicialState from "../hooks/useInitialState";



const App=()=>{
    const initialState=useInicialState();
    return(
        <AppContext.Provider value={initialState}> 
        <BrowserRouter>
         <Layout>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/recover-password" component={RecoveryPassword}/>
                <Route exact path="/send-email" component={SendEmail} />
					<Route exact path="/new-password" component={NewPassword} />
					<Route exact path="/account" component={MyAccount} />
					<Route exact path="/signup" component={CreateAccount} />
					<Route exact path="/checkout" component={Checkout} />
					<Route exact path="/orders" component={Orders} />
                <Route path="*" component={NotFound}/>
                <Route ></Route>
            </Switch>
        </Layout>
        </BrowserRouter>
        </AppContext.Provider>
    
     
    )
}

export default App;