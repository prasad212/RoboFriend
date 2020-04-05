import React, { Component } from 'react';
import CardList from './CardList';
import {robots} from './robot';
import Searchbox from './Searchbox'
import './App.css'


class App extends Component
{
    constructor(){
        super()
        this.state={
        robots:[],
        searchfield:''}


    }
        componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>{
            return response.json();
        })
        .then(users =>{
            this.setState({robots:users})
        } );
    }
    onsearchchnage=(event)=>{
       this.setState({searchfield: event.target.value});
       
       
    }

    render(){
        const filterrobot=this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
    return (
        <div className='pa6'>
        
        <h1 className='i  tc underline'>Robo Friends</h1>
         < Searchbox searchchange={this.onsearchchnage}/>
        <CardList  robots={filterrobot}/>
        </div>
    );
}}
export default App;