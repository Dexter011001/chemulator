import React from 'react'
import styles from  '../App.css'
import {NavBar, NavItem, DropdownMenu} from '../Components/NavBar';


export const conversion = () => {
    return (
        <div>
            <NavBar>
                    <NavItem icon='🖐'>
                        <DropdownMenu></DropdownMenu>
                    </NavItem>
                    
                </NavBar>
                
               <h1 className='home-title'>Conversion</h1> 
        </div>
    )
}
