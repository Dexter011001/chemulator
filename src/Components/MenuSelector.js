import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import  makeStyles  from '@material-ui/core/styles/makeStyles';
import Paper from '@material-ui/core/Paper';
import styles from  '../App.css'
import { Link } from 'react-router-dom'

 export const MenuSelector = () =>{
    return (
    <div className='cards'>
        <div class='card'>
            <div class='Title'> Periodic Table</div>
            <Link to='/periodic' className='btn'>Go to</Link>
        </div>

        <div class='card'>
            <div class='Title'> Calculation  </div>
            <Link to='/formula' className='btn'>Go to</Link>
        </div>

        

        <div class='card'>
            <div class='Title'> About </div>
            <Link to='/about' className='btn'>Go to</Link>
        </div>
    </div>
    )

     }
    


