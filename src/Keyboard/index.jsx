import React from 'react'
import Button from '../Components/button'
import './style.css'

function Keyboard({handleKeyPress}) {
    const arr = [...new Array(26)];
    let start = 65;

    function handleClick(key){
        return ()=> {
            handleKeyPress(key);
        }
    }

  return <div className='keyboard'>
    {arr.map((_ , index)=>{
        const currKey = String.fromCharCode(start++);
        return <Button onClick={handleClick(currKey)} type={Button.ButtonType.KEYBOARD} label={currKey} key={index}/>
    })}
  </div>
}

export default Keyboard