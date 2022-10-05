import React, { useState } from 'react'


export default function Textarea(props) {

  // =============================== upper case function ============================

  const clickUpperCase = () => {
    // console.log('jfnjsdnfsd');

    let newTextU = text.toLocaleUpperCase();
    setText(newTextU);
  }

  // =============================== lower case function ============================


  const clickLowercase = () => {
    let newTextL = text.toLocaleLowerCase();
    setText(newTextL);
  }

  // =============================== on change function ============================


  const change = (e) => {
    // console.log('xfjksdnjign');

    setText(e.target.value)
  }

  const [text, setText] = useState('');
  return (
    <>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={change} rows="10"></textarea>
      </div>
      <div className='container'>
        <button className='btn btn-primary' onClick={clickUpperCase}>Convert Text to Uppercase</button>
        <button className='btn btn-primary' onClick={clickLowercase}>Convert Text to Lowercase</button>
      </div>
    </>
  )
}
