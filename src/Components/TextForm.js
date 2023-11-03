import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Upper is clicked");
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState("Enter text here");
  return (
    <>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" id="upper" value={text} onChange={handleOnChange} rows="3"></textarea>
    <button className="button btn btn-primary my-3" onClick={handleUpClick}>Change to Uppercase</button>
    </div>
    </>
  )
}
