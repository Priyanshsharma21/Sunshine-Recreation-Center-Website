import React, { useRef } from 'react'
import gsap from 'gsap';

const Text3d = ({primary, secondary}) => {
    const text1 = useRef(null);
    const text2 = useRef(null);
  return (
    <div className="s5textContainer">
        <p className="s5primary" ref={text1}>{primary}</p>
        <p className="s5secondary" ref={text2}>{secondary}</p>
    </div>
  )
}

export default Text3d