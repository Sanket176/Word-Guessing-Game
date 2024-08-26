import { useState } from 'react'
import './App.css'
import Hint from './Hint'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Word Guessing Game</h1>
      <Hint />

      {/* <Tag label="score"/>
      <Input /> &nbsp;
      <Input /> &nbsp;
      <Input /> &nbsp;
      <Input /> &nbsp;
      <Text text="Apple" type={Text.StyleType.ANSWER_HINT}/>
      <Button type={Button.ButtonType.CIRCULAR} label='prev' onClick={console.log("prev btn pressed")}/>
      <Button type={Button.ButtonType.KEYBOARD} label='S' onClick={console.log("S btn pressed")}/> */}

    </>
  )
}

export default App
