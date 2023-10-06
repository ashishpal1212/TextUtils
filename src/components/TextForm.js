import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    console.log("Uppercase was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase!", "Success") 
  }

  const handleLoClick = ()=>{
    console.log("Lowercase was Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase!", "success") 
  }

  const handleClearClick = ()=>{
    console.log("Lowercase was Clicked" + text);
    let newText = ('');
    setText(newText)
    props.showAlert("Text Cleared!", "success")
  }

  const handleCopy = ()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied!", "success")
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra Space Removed!", "success")
  }
  
  const handleOnChange = (event)=>{
    console.log("On Change"); 
    setText(event.target.value);
  }

  const [text, setText] = useState('')

  return (
    <>
    <div className="mb-3" style={{color: props.mode === 'dark' ? 'white':'black'}}>
      <h1>{props.heading}</h1>
      <textarea className='form-control' value={text} onChange={handleOnChange}  id="myBox" rows="10"></textarea>
      <button className="btn btn-outline-success my-2 mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-outline-success my-2 mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
      <button className="btn btn-outline-primary my-2 mx-2" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-outline-primary my-2 mx-2" onClick={handleExtraSpaces}>Remove Xtra Space</button>
      <button className="btn btn-danger my-2 mx-2" onClick={handleClearClick}>Clear Text</button>


    </div>
    <div className="container my-3" style={{color: props.mode === 'dark' ? 'white':'black'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes</p>
      <h2>Preview</h2>
      <p>{text}</p>

    </div>
    </>
  )
}
