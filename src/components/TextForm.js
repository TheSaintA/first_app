import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("uppercase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = ()=>{
        // console.log("uppercase was clicked"+ text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = ()=>{
        // console.log("uppercase was clicked"+ text);
        let newText = ' ';
        setText(newText);
    }
    const handleOnChange = (event)=>{
        // console.log("On Chgitange");
        setText(event.target.value);
    }
    const handleCopy = ()=>{
        var copyText = document.getElementById('textarea');
        copyText.select();
        copyText.setSelectionRange(0,99999);
        navigator.clipboard.writeText(copyText.value);
        alert("Text copied!!");
    }
    const [text, setText] = useState('Enter text here');
    return (
        <div>
            <div className="container my-lg-3">
                <div className="row">
                    <div className="col w-25 mx-auto d-block">
                    <div className="mb-3">
                        <h2 className='text-center'>{props.heading}</h2>
                    <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'black':'white',color:props.mode==='light'?'black':'white'}} onChange={handleOnChange} id="textarea" rows="8" value={text}></textarea>
                    </div>
                    <div className="btn-group mx-auto d-block text-center">
                    <button className='btn btn-outline-primary' onClick={handleUpClick}>Convert to uppercase</button>
                    <button className='btn btn-outline-success' onClick={handleLowClick}>Convert to lowercase</button>
                    <button className='btn btn-outline-danger' onClick={handleClearClick}><span className='fa fa-trash fa-lg'></span> Delete</button>
                    <button className='btn btn-outline-info' onClick={handleCopy}><span className='fa fa-copy fa-lg'></span> Copy</button>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h1>Your Text Summary</h1>
                        <p>{text.split(" ").length} Words {text.length} Characters</p>
                        <p>{0.008 * text.split(" ").length} Minutes read</p>
                        <h2>Preview</h2>
                        <p>{text}</p>
                        
                    </div>
                </div>
            </div>
            
        </div>
    )
}
