import React from 'react'
import Button from '../Components/button'
import './style.css'

function Keyboard() {
    const arr = [...new Array(26)];
    let start = 65;


  return <div className='keyboard'>
    {arr.map((_ , index)=>{
        const currKey = String.fromCharCode(start++);
        return <Button type={Button.ButtonType.KEYBOARD} label={currKey} key={index}/>
    })}
  </div>
}

export default Keyboard