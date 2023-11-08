import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Upper is clicked");
    let newText = text.toUpperCase();
    setText(newText)
    props.setAlertMessage("Uppercase is enabled", "success");
  }
  const handleDownClick = () => {
    // console.log("Upper is clicked");
    let newText = text.toLowerCase();
    setText(newText)
    props.setAlertMessage("Lowercase is enabled", "success");
  }
  const handleClearClick = () => {
    // console.log("Upper is clicked");
    let newText = '';
    setText(newText)
    props.setAlertMessage("Text is cleared", "success");
  }
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  }
  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([document.getElementById('input').value],
      { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element);
    element.click();
    props.setAlertMessage("Text file is downloaded", "success");
  }
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.setAlertMessage("Copy to clipboard", "success");
  }
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.setAlertMessage("Space is removed", "success");
  }

  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{ color: props.mode === "light" ? "black" : "white" }}>
        <h1>{props.heading}</h1>
        <p className="color-grey ">Countify is a word counter and character counting utility which can be used to manipulate your text
         in the way you want. You can remove extra spaces, copy the manipulated text as well as convert your text from Uppercase to 
          lowercase and lowercase to uppercase.<br />
        </p>
        <div className="mb-3">
          <textarea className="form-control border-dark" id="input" value={text} onChange={handleOnChange} rows="6"></textarea>
          <button disabled={text.length===0} className="button btn btn-primary my-2 mx-1" onClick={handleUpClick}>Change to Uppercase</button>
          <button disabled={text.length===0} className="button btn btn-primary my-2 mx-1" onClick={handleDownClick}>Change to Lowercase</button>
          <button disabled={text.length===0} className="button btn btn-primary my-2 mx-1" onClick={handleClearClick}>Clear All</button>
          <button disabled={text.length===0} className="button btn btn-primary my-2 mx-1" onClick={downloadTxtFile}>Download</button>
          <button disabled={text.length===0} className="button btn btn-primary my-2 mx-1" onClick={handleCopy}>Copy Text</button>
          <button disabled={text.length===0} className="button btn btn-primary my-2 mx-1" onClick={handleExtraSpace}>Remove Extra Space</button>
        </div>
      </div>
      <div className="container" style={{ color: props.mode === "light" ? "black" : "white" }}>
        <h1> Your words count</h1>
        <h5>{text.split(/\s+/).filter((element)=>{return element.length!=0}).length} words | {text.length} character</h5>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!=0}).length} Minutes for read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  )
}
