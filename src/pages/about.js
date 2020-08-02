import React from 'react'
import styles from  '../App.css'
import {NavBar, NavItem, DropdownMenu} from '../Components/NavBar';


export const about = () => {
    return (
        <div>
            <NavBar>
                    <NavItem icon='🖐'>
                        <DropdownMenu></DropdownMenu>
                    </NavItem>
                    
                </NavBar>
                
               <h1 className='home-title'>About</h1> 

               <div className='about'>
               
                    <h1 className='about-question'>What is chemulator?</h1>
                    
                    <p className='about-detail'>Chemulator is a web app designed to help chemistry student do their work without wasting time searching for an element's atomic number or other details.
                     </p>
                     <p className='about-detail'>It should be used as a homework helper.</p>
                    <h1 className='about-question'> Credits </h1>
                    <p className='about-detail'> Vesh (creator) : You know who I am.</p>
                    <p className='about-detail'> Joshna Ramchurn(CFO - Chief Fun Officer) : Provided feedback, features and testing.</p>
                    <p className='about-detail'> Periodic table API: 
                    <a href='https://github.com/neelpatel05/periodic-table-api'>Github</a></p>
                     
               </div>
        </div>
    )
}
