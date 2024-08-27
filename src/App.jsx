import Hint from './Hint'
import Scoreboard from './Score-board'
import Controller from './Controller'
import Keyboard from './Keyboard'

import './App.css'

import { Questions } from './constant'
import { useState } from 'react'

const DEFAULT_START_INDEX = 0;

//https://www.youtube.com/watch?v=kS1vLReJr2I - Watch for Reference
function App() {

  //for Nested Object or Array, we should use Deep copy using 'structuredClone'.
  const [questions, setQuestions] = useState(structuredClone(Questions));
  // const [questions, setQuestions] = useState(Questions);      //wrong approach
  // const [questions, setQuestions] = useState([...Questions]); //wrong approach
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(DEFAULT_START_INDEX); // defining what '0' means

  const activeQuestion = questions[activeQuestionIndex]; //Now, activeQuestion is our current question object

  const {question, answer, hint, id} = activeQuestion || {}; //Destructuring active question object

  const showPrev = activeQuestionIndex > 0;  //Boolean value
  const showNext = activeQuestionIndex < questions.length -1;  //Boolean value

  function handlePrev(){  //To handle prev
    console.log("prev buton pressed");
    if(activeQuestionIndex === 0){
      return;
    }
    setActiveQuestionIndex(activeQuestionIndex - 1);
  }

  function handleNext(){  //To handle next
    console.log("next buton pressed");
    if(activeQuestionIndex === questions.length -1){
      return;
    }
    setActiveQuestionIndex(activeQuestionIndex + 1);
  }

  function handleKeyPress(key){
    console.log("Key pressed", key);
  }

  return (
    <>
      <h1>Word Guessing Game</h1>
      <div className='Hint-score'>
        <Hint hint={hint}/>
        <Scoreboard/>
      </div>
      <Controller showPrev={showPrev} showNext={showNext} handleNext={handleNext} handlePrev={handlePrev} question={question} />
      <Keyboard handleKeyPress={handleKeyPress}/>

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
