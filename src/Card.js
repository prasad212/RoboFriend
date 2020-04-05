import React, { Component } from 'react'
const Card = ({name,email,id})=>{
  
     return (
         
         <div className="tc bg-light-green dib br2 pa1 ma3 grow bw2 shadow-5">
             <h1>RoBOFriends</h1>
                
             <img src={'https://robohash.org/'+name+'?200*200'}/>
             <div>
                    <h2>{id}</h2>
                    <p>{name}</p>
                    <p>{email}</p>
             </div>
         </div>
     );
}
export default Card;