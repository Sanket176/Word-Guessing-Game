import { useState } from 'react'
import Input from './Components/input'
import Text from  './Components/text'
import './App.css'
import Tag from './Components/tag'
import Button from './Components/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Word Guessing Game</h1>
      <Tag label="score"/>
      <Input /> &nbsp;
      <Input /> &nbsp;
      <Input /> &nbsp;
      <Input /> &nbsp;
      <Text text="Apple" type={Text.StyleType.ANSWER_HINT}/>
      <Button type={Button.ButtonType.CIRCULAR} label='prev' onClick={console.log("prev btn pressed")}/>
      <Button type={Button.ButtonType.KEYBOARD} label='S' onClick={console.log("S btn pressed")}/>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
