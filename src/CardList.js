import React from 'react';
import Card from './Card'
const CardList = ({robots}) =>{
    const cardcomponent = robots.map((users,i)=>{
       
          return <Card id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
          
    })
        

    return (
        <>
        {cardcomponent}
        </>
    )
}
export default CardList;