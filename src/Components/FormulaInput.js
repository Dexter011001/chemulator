import React, { Component, useState, useEffect } from 'react'
import '../style/NavBar.css'
import { calculateMass, calculateGas, calculateAcid } from 'chemicaltools';

export const FormulaInput = (props) => {
    const [number1, setNumber1] = useState('')
    const [result, setResult] = useState([]);

    const updateSearch = e =>{
        setNumber1(e.target.value);
        
    }

    console.log(calculateAcid(0.1, [2,7], true))

    

    const getSearch = e =>{
        e.preventDefault();
        if(number1 == 0) {
            setResult('No molecule entered') 
        } else{
            
        setResult(calculateMass(number1.toUpperCase()).mass);
        }
    }

    return (
            <div className='formula-box'>
               <form  className='formula-input' onSubmit={getSearch} > 
                   <label className='formula-label'>
                        {props.title}
                        

                            <input className='search-bar' type='text'  value={number1} onChange={updateSearch} placeholder='Enter a molecule:' />
                            

                            <input type="text" className='search-bar' readOnly placeholder = {`Result : ${result}`}  />  

                        <button className='search-btn' type='submit' >Calculate</button>
                    </label>

                    
                    
               </form>
        </div>
    )
}





