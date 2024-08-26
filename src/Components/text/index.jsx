import React from 'react'
import './style.css';

const StyleType = {
    SOCRE:'score',
    QUESTION_TITLE:'question',
    ANSWER_HINT: 'answer'
}

function Text(props) {

    const {text="", type = StyleType.SCORE} = props || {}; // Destructuring 'text' from props with a default value
    //If 'text' is not provided in 'props', it defaults to an empty string ("").
    //'props || {}' ensures that if 'props' is null or undefined, it will default to an empty object, preventing destructuring errors.

    let className ='';
    className += ` text_${type}`;

  return <span className={className}>{text}</span>
}

Text.StyleType = StyleType;   //Text is function and fns are object in JS. So giving it keys of 'StyleType'

export default Text;