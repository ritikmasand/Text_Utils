import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick=()=>{
    console.log(text);
    let newtext=text.toUpperCase();
    setText(newtext);
    props.showalert('converted to uppercase','success');
  }
  const handleloClick=()=>{
    console.log(text);
    let newtext=text.toLowerCase();
    setText(newtext);
    props.showalert('converted to lowercase','success');
  }
  const handleclearClick=()=>{
    console.log(text);
    let newtext=" ";
    setText(newtext);
  }
  const handleonChange=(event)=>{
    setText(event.target.value);
  }
  function myFunction() {
    var copyText = document.getElementById("myBox");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    props.showalert('Text copied to clipboard!','success');
  }
  function removeSpace() {
  let dummytext=text.replace(/\s+/g, ' ').trim()
  setText(dummytext);
  props.showalert('extra spaces removed','success');
  }
  const[text,setText]=useState('Enter text here...');

  return (
    <>
    <div className='contaiiner'style={{color:props.mode==='dark'?'white':'black'}}>
<h1>{props.heading}</h1>
<div className="mb-3">
  <label for="textbox" className="form-label"></label>
  <textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='dark'?'white':'black'}}id="myBox" rows="10"></textarea>
</div>
<button type="button" className="btn btn-warning mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
<button type="button" className="btn btn-warning mx-1" onClick={handleloClick}>Convert To toLowerCase</button>
<button type="button" className="btn btn-warning mx-1" onClick={handleclearClick}>Clear Text</button>
<button type="button" className="btn btn-primary mx-1" onClick={myFunction}>Copy Text</button>
<button type="button" className="btn btn-primary mx-1" onClick={removeSpace}> Remove Extra Spaces</button>


    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>Your Text Summary</h1>
    <p> {text.split(" ").length}words and {text.length} characters</p>
    <p>{0.008*text.split(" ").length} time remaining to read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter the text to preview"}</p>
    </div>
    </>
  )
}