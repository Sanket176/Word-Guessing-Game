import React from 'react'

import './style.css'

const ButtonType = {
    KEYBOARD: "keyboard",
    CIRCULAR: "circular",
}

function Button({type=ButtonType.CIRCULAR, label='', onClick=()=>{}}) {

    const className = ` btn_${type}`;

  return <button className={className} onClick={onClick} >{label}</button>
}

Button.ButtonType = ButtonType;

export default Button