import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Upper is clicked");
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleDownClick = ()=>{
        // console.log("Upper is clicked");
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearClick = ()=>{
        // console.log("Upper is clicked");
        let newText = '';
        setText(newText)
    }
    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    const downloadTxtFile = () => {
        const element = document.createElement("a");
        const file = new Blob([document.getElementById('input').value],    
                    {type: 'text/plain;charset=utf-8'});
        element.href = URL.createObjectURL(file);
        element.download = "myFile.txt";
        document.body.appendChild(element);
        element.click();
      }
    const [text, setText] = useState("");
  return (
    <>
    <div className="container">
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" id="input" value={text} onChange={handleOnChange} rows="3"></textarea>
    <button className="button btn btn-primary my-3 mx-3" onClick={handleUpClick}>Change to Uppercase</button>
    <button className="button btn btn-primary my-3 mx-3" onClick={handleDownClick}>Change to Lowercase</button>
    <button className="button btn btn-primary my-3 mx-3" onClick={handleClearClick}>Clear All</button>
    <button className="button btn btn-primary my-3 mx-3" onClick={downloadTxtFile}>Download</button>  


    </div>
    </div>
    <div className="container">
        <h1> Your word count</h1>
        <p>{text.split(" ").length} words {text.length} character</p>
        <p>{0.008 *text.split(" ").length } Minutes for read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
