import React, { Component, useState, useEffect } from 'react'
import axios from 'axios';
import styles from  '../App.css'
import {NavBar, NavItem, DropdownMenu} from '../Components/NavBar';


export const PeriodicTable = () => {  
    const [elementData, setElementData] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('Hydrogen');
    
    

    useEffect(() => {
        getElement();
    }, [query]);

    const getElement = async () => {
    const resp = await fetch(
        `https://neelpatel05.pythonanywhere.com/element/atomicname?atomicname=${query}`
    );

    const data = await resp.json();
    setElementData(data)
    console.log(data)
    };

    const updateSearch = e =>{
        setSearch(e.target.value);
    }

    const getSearch = e =>{
        e.preventDefault();
        setQuery(search);
    }
    
        return (
            <div>
                <NavBar>
                    <NavItem icon='🖐'>
                        <DropdownMenu></DropdownMenu>
                    </NavItem>
                    
                </NavBar>
                
               <h1 className='home-title'>Periodic Table</h1> 
               <div className='form-search'>
               <form onSubmit={getSearch} className='search-form' >
                   <label className='element-label'>Element:
                        <input className='search-bar' type='text' value={search} onChange={updateSearch}/>
                        <button className='search-btn' type='submit'>Search</button>
                    </label>
                    
               </form>

            <div className='element-details'>
               <p className='element-data'>Name: {elementData.name}</p>
               <p className='element-data'>Symbol: {elementData.symbol}</p>
               <p className='element-data'>Atomic Mass: {elementData.atomicMass}</p>
               <p className='element-data'>Atomic Number: {elementData.atomicNumber}</p>
               <p className='element-data'>Electron Affinity: {elementData.electronAffinity} kJ/mol</p>
               <p className='element-data'>Ionization Energy: {elementData.ionizationEnergy} kJ/mol</p>
               <p className='element-data'>Oxidation States: {elementData.oxidationStates}</p>
               <p className='element-data'>Electronic Config: {elementData.electronicConfiguration}</p>
               
            </div>
            
               </div>
               
            </div>
        )
    }


export default PeriodicTable;
