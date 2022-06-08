import React,{useState} from 'react';


 const TextForm = (props) => {
    const upClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }

    const loClick=()=>{
        setText(text.toLowerCase());
        props.showAlert("Converted to lowercase","success");
    }

    const handleClearClick=()=>{
        setText('');
    }

    const handleOnChange=(event)=>{
        setText(event.target.value);
    }

    const handleCopyText=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const [text, setText]=useState('');
    return (
        <div className='container my-2 text-center' style={{color:props.mode==='dark'?'white':'black'}}>
        <div>
            <h1>{props.heading}</h1>
            <div>
                <textarea name="" id="myBox" cols="100" rows="10" onChange={handleOnChange} value={text} style={{backgroundColor:props.mode==='dark'?'#25527e':'white', color:props.mode==='dark'?'white':'black'}}></textarea>
            </div>
            <button className='btn btn-dark m-1' onClick={upClick}>Uppercase</button>
            <button className='btn btn-dark m-1' onClick={loClick}>Lowercase</button>
            <button className='btn btn-dark m-1' onClick={handleClearClick}>Clear</button>
            <button className='btn btn-dark m-1' onClick={handleCopyText}>Copy Text</button>
            <button className='btn btn-dark m-1' onClick={handleExtraSpace}>Remove extra space</button>
        </div>
        <div>
            <h3>Your Text Summary</h3>
            <p>{((text.trim().split(" ")).filter(function (element) {
                    return element !=="";
                })).length} Word and {text.length} Characters</p>
            <p>{0.008 * ((text.trim().split(" ")).filter(function (element) {
                    return element !=="";
                })).length} Minutes to read</p>
            <h5>Preview</h5>
            <p>{text.length>0?text:"Enter something in textbox above to preview it here"}</p>
        </div>
        </div>
    );
};

export default TextForm;
