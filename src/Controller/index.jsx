import React from 'react'
import './style.css'
import Button from '../Components/button'
import Text from '../Components/text'

function Controller({question, handleNext, handlePrev, showNext, showPrev}) {
  return <div>

    {/* conditionally rendering 'prev' and 'next' button */}
    {showPrev && <Button type={Button.ButtonType.CIRCULAR} label="Prev" onClick={handlePrev}/>}
    <Text  text={question} type={Text.StyleType.QUESTION_TITLE} />
    {showNext && <Button type={Button.ButtonType.CIRCULAR} label="Next" onClick={handleNext}/>}
  </div>
}

export default Controller