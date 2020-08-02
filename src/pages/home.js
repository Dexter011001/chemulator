import React, { Component } from 'react'
import '../App.css';
import  { MenuSelector }  from '../Components/MenuSelector';

class home extends Component {
    render() {
        return (
            <div>
                <h1 className = 'home-title'> Chemulator </h1>
                <MenuSelector />
            </div>
        )
    }
}

export default home;
