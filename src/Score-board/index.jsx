import React from 'react'
import Tag from '../Components/tag'
import Text from '../Components/text'

function Scoreboard() {
  return <div>
    <Tag label="SCORE" />
    <Text text="1" type={Text.StyleType.SOCRE} />
  </div>

}

export default Scoreboard;