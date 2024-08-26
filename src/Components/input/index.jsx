import {useState, useRef} from 'react'
import './style.css'

function Input ({onInput=()=>{}}={}) {

    const [value, setValue] = useState('');
    // const inputRef = useRef('');

    function handleInput(e) {
        // e.preventDefault;
        onInput(e.target.value);
        // inputRef.current = e.target.value;
        setValue(e.target.value);
    }

  return <input value={value}  type="text" onInput={handleInput}/> // adding attribute 'ref={inputRef}'
}

export default Input