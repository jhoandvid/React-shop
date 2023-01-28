

import '@styles/MenuMobile.scss'
import React, { useContext, useState } from 'react'
import close from '@icons/icon_close.png'
import AppContext from '../context/AppContext'





const MenuMobile=()=>{
    
    const {togleHeader:{ handleToggleMenuMobile}}=useContext(AppContext)

    return(


     <div className="mobile-menu">
        <ul >
        <div className="close" >
      <img src={close} alt="close" onClick={handleToggleMenuMobile}/>
     </div>
            <li>
                <a href="/">CATEGORIES</a>
            </li>

            <li>
                <a href="/">All</a>
            </li>

            <li>
                <a href="/">Clothes</a>
            </li>

            <li>
                <a href="/">Electronics</a>
            </li>

            <li>
                <a href="/">Furnitures</a>
            </li>
            <li>
                <a href="/">Toys</a>
            </li>

            <li>
                <a href="/">Others</a>
            </li>
        
        </ul>

        <ul>
           <li> <a href="/">My Orders</a> </li>
           
           <li> <a href="/">My Account</a> </li>

         
        </ul>

        <ul>
            <li > <a href="/" className="email">Plazi@gmailcom</a></li>
            <li><a href="" className="sign-out" >Sign out</a></li>
        </ul>

       


    </div>

    )

    

}

export default MenuMobile;
