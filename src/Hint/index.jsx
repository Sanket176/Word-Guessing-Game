
import React from 'react'
import Input from '../Components/input';
import Text from '../Components/text';

import './style.css'


function Hint() {
  return <div>
    <Input />
    <Text text="k" type={Text.StyleType.ANSWER_HINT}/>
  </div>
}

export default Hint