
import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Layout from "../container/Layout";
import Login from "../container/Login";
import RecoveryPassword from "../container/RecoveryPassword";
import '../styles/global.css';





const App=()=>{
    return(
        <BrowserRouter>
            <Layout>
                <Login/>    
            </Layout>
        </BrowserRouter>
    
     
    )
}

export default App;