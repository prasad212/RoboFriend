import React from 'react'

const Searchbox =({Searchfield,searchchange})=>
{
    return (
        <div className='tc pa2'>
        <input className='pa2 bg-light-blue'
        type='search' 
        placeholder='search robots'
        onChange={searchchange}/>
        
        </div>
    );
}
export default Searchbox;