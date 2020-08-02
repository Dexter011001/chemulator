import React, { Component, useState, useEffect } from 'react'
import '../style/NavBar.css'
import { calculateGas } from 'chemicaltools';


export const PhCalculator = (props) => {
    const [number1, setNumber1] = useState(0)
    const [number2, setNumber2] = useState(0)
    const [number3, setNumber3] = useState(0)
    const [result, setResult] = useState([]);

    

    const updateSearch = e =>{
        setNumber1(e.target.value);
    }

    const updateSearch2 = e =>{
        setNumber2(e.target.value);
    }

    const updateSearch3 = e =>{
        setNumber3(e.target.value);
    }

    const calculateTemp = (p, v,n) =>{
        let T = (p * v ) / (n * 8.314);
        return T.toFixed(2)
    }

    const getSearch = e =>{
        e.preventDefault();
        if(number1 == '' || number2 =='' || number3 =='') {
            setResult('No value entered') 
        } else{
        setResult(calculateTemp( number1, number2, number3))
        }
    }
   
    return (
         
            <div className='formula-box'>
               <form  className='formula-input' onSubmit={getSearch} > 
                   <label className='formula-label'>
                        {props.title}
                        

                            <input className='search-bar' type='number' step='any' value={number1} onChange={updateSearch} placeholder='Enter Pressure(P / Pa)' />
                            <input className='search-bar' type='number' step='any' value={number2} onChange={updateSearch2} placeholder='Enter Volume(V / m3) ' />
                            <input className='search-bar' type='number' step='any' value={number3} onChange={updateSearch3} placeholder='Enter moles(n / mol)' />
                            

                            <input type="text" className='search-bar' readOnly placeholder = {`Temperature(T/K) : ${result}`}  />  

                        <button className='search-btn' type='submit' >Calculate</button>
                    </label>

                    
                    
               </form>
        </div>
        

        

    );
}


