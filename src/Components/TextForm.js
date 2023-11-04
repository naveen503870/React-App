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
    const handleCopy = () => {
      var text = document.getElementById('input');
      text.select();
      navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpace = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
    }
    const [text, setText] = useState("");
  return (
    <>
    <div className="container" style={{color: props.mode==="light"?"black":"white"}}>
    <h1>{props.heading}</h1>
    <p className="color-grey ">A very handy online text tool where you can change between lower case and upper case letters, 
    where you can capitalize, uncapitalize, convert to mix case and transform your text. 
    Explore the options below:</p>
    <div className="mb-3">
    <textarea className="form-control border-dark"  id="input" value={text} onChange={handleOnChange} rows="6"></textarea>
    <button className="button btn btn-primary my-3 mx-3" onClick={handleUpClick}>Change to Uppercase</button>
    <button className="button btn btn-primary my-3 mx-3" onClick={handleDownClick}>Change to Lowercase</button>
    <button className="button btn btn-primary my-3 mx-3" onClick={handleClearClick}>Clear All</button>
    <button className="button btn btn-primary my-3 mx-3" onClick={downloadTxtFile}>Download</button> 
    <button className="button btn btn-primary my-3 mx-3" onClick={handleCopy}>Copy Text</button> 
    <button className="button btn btn-primary my-3 mx-3" onClick={handleExtraSpace}>Remove Extra Space</button>  
    </div>
    </div>
    <div className="container" style={{color: props.mode==="light"?"black":"white"}}>
        <h1> Your word count</h1>
        <h5>{text.split(" ").length} words | {text.length} character</h5>
        {/* <p>{0.008 * text.split(" ").length } Minutes for read</p> */}
        <h2>Preview</h2>
        <p>{text.length>0 ? text : "Please write something in the text box above to preview it here" }</p>
    </div>
    </>
  )
}
