import React from 'react'
import styles from  '../App.css'
import {NavBar, NavItem, DropdownMenu} from '../Components/NavBar';
import {FormulaInput} from '../Components/FormulaInput';
import {PhCalculator} from '../Components/PhCalculator';



export const formula = () => {
    return (
        <div className='formula-page'>
            <NavBar>
                    <NavItem icon='🖐'>
                        <DropdownMenu></DropdownMenu>
                    </NavItem>
                    
                    
                </NavBar>
                
               <h1 className='home-title'>Calculator</h1> 

               <div className='formula-content'>
                        <FormulaInput title='Molecular Mass Calculator'></FormulaInput>
                        <PhCalculator title='Ideal Gas Calculator'></PhCalculator>
                    </div>
        </div>
    )
}



