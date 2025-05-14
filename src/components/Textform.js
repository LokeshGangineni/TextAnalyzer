import React,{useState}from 'react'



export default function Textform(props) {
    const[text,setText]=useState('');
    
    const handleUpClick=(event)=>
    {
      console.log("clicked on to uppercase");
      var newStr=text.toUpperCase();
      setText(newStr);
      props.showAlert("converted to uppercase","success")

    }
    const ClearText=()=>
    {
      setText("");
      props.showAlert("Text is cleared ","success");
    }
    const handleLoClick=(event)=>
    {
      console.log("clicked on to uppercase");
      var newStr=text.toLowerCase();
      setText(newStr);
      props.showAlert("converted to lowercase","success")

    }
    const handleOnChange=(event)=>
    {
      setText(event.target.value);
    }
    const SelectText=()=>
    {
      let text=document.getElementById("myBox");
      text.select();
      props.showAlert("you have selected all the text","success")
      // navigator.clipboard.writeText(text.value);
    }
    const CopyText=()=>
    {
      let text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value );
    } 
  
  return (
    <>
    <div style={{color:props.mode==="dark"?"white":"black"}}>
      <div className="container">
        <h1 >{props.heading}</h1>
        <div  className="mb-3">
            <br />
          <textarea style={{width:'80em',color:props.mode==="dark"?"white":"black"}} name="" id="myBox" rows="9"  onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-3" onClick={ClearText}>Clear Text</button>
        <button className="btn btn-primary mx-3" onClick={SelectText}>Select Text</button>
        <button className="btn btn-primary mx-3" onClick={CopyText}>Copy Text</button>
      </div> 
    </div>
    <div className="container my-10">
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length}  Characters</p>
      <p>{0.008 * text.split(" ").length} minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0 ?text:"Enter some text to preview"}</p>
      
    </div>
    </>
  )
}

