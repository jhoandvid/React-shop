import React, { useContext } from "react";
import Header from '../components/Header';
import AppContext from "../context/AppContext";


const Layout=({children})=>{


    

   
    

    return(
        <div>
            <Header/>
            {children}
        </div>
    )
}

export default Layout;