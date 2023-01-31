import React, { useState } from 'react'
import MovingText from 'react-moving-text'
 
const AnimationsForChaining = ["fadeIn", "swing", "flipSlowDown", "fadeOutToBottom", "jelly"]

const AnimationChain = (props) => {
 
  const [ animationIndex, setAnimationIndex ] = useState(0)
  //setAnimationIndex(0);
  const [ animationType, setAnimationType ] = useState(AnimationsForChaining[0])
  // const [counter, setCounter] = ([]);

  const handleChainAnimation = () => {
    React.setCounter(animationIndex+1)
    setAnimationType(React.selectedItems[animationIndex+1])
  }
 
  return (
    <MovingText
      onAnimationEnd={handleChainAnimation}
      type={animationType}
      duration="1000ms"
      timing="linear"
      iteration="infinite">
      {props.text}
    </MovingText>
  )
}

export default AnimationChain