import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("UpperCase was clicked")
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "success");
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case", "success");
    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text has been cleared", "success");
    }
    
    const handleUpChange = (event)=> {
        console.log("handle on change");
        setText(event.target.value);

    }
    const handleCopy =()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied.", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces were removed", "success");
    }
    
    const [text, setText] = useState('');
    return (
        <>
        <div className='container' style={{color: props.mode === 'dark'?'white' : 'black'}}>
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} id="myBox" onChange={handleUpChange} rows="8" style={{backgroundColor: props.mode === 'dark'?'rgb(21 22 22)':'rgb(214 253 249)', color: props.mode === 'dark'?'white':'#042743'}}></textarea>
            </div>
            <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1 " onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled = {text.length===0} className="btn btn-danger mx-1 my-1 " onClick = {handleLoClick} rows = "8" >Convert to Lowercase</button>   
            <button disabled = {text.length===0} className="btn btn-secondary mx-1 my-1 " onClick = {handleClearClick} rows = "8" >Clear Text</button>
            <button disabled = {text.length===0} className="btn btn-warning mx-1 my-1 " onClick = {handleCopy} rows = "8" >Copy Text</button>
            <button disabled = {text.length===0} className="btn btn-dark mx-1 my-1 " onClick = {handleExtraSpaces} rows = "8" >Remove Extra Spaces</button>
            
        </div>
        <div className="container my-5"  style={{color: props.mode === 'dark'?'white' : 'black'}}>
            <h2>Your text summary</h2>
            <b><p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters.</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read.</p></b>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Nothing to preview'}</p>
        </div>
    </>
  )
}
