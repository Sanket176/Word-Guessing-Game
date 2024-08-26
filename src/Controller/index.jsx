import React from 'react'
import './style.css'
import Button from '../Components/button'
import Text from '../Components/text'

function Controller() {
  return <div>
    <Button type={Button.ButtonType.CIRCULAR} label="Prev" onClick={()=>console.log("prev button clicked")}/>
    <Text  text="A friut which keeps doctors away" type={Text.StyleType.QUESTION_TITLE} />
    <Button type={Button.ButtonType.CIRCULAR} label="Next" onClick={()=>console.log("next button clicked")}/>
  </div>
}

export default Controller