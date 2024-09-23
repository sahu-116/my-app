import React,{useState} from 'react'
export default function Textarea(props) {
    const handelUpClick =()=>{
        console.log('Uppercase clicked.'+ text)
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted tu Uppercase","success");
    }
    const handelLoClick =()=>{
        console.log('Uppercase clicked.'+ text)
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted tu Lowercase","success");

    }
    const handelCopyClick =()=>{
        console.log('Copy clicked.'+ text)
        var text=document.getElementById('mybox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy has bees successfully done","success");

    }
    const handelExtraSpaces =()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handelClearClick =()=>{
        console.log('Clear clicked.'+ text)
        let newText= '';
        setText(newText)
        props.showAlert("Clear all","danger");

    }
    const handelonChange =(event)=>{
        console.log('Onchange  clicked.')
        setText(event.target.value);
    }
    
    const [text, setText]=useState('')
    return (
        <>
            <div className='container' style={{color: props.mode === 'dark' ? 'white' : 'black'}} > 
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handelonChange} style={{backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color:props.mode === 'dark' ? 'white' : 'black'}} id="mybox" rows="10"></textarea>
                </div>
                <button disabled={text.length===0} className='btn btn-primary btn-sm mx-1 my-1' onClick={handelUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className='btn btn-success btn-sm mx-1 my-1' onClick={handelLoClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className='btn btn-secondary btn-sm mx-1 my-1' onClick={handelCopyClick}>Copy Text</button>
                <button disabled={text.length===0} className='btn btn-info btn-sm mx-1 my-1' onClick={handelExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length===0} className='btn btn-danger btn-sm mx-1 my-1' onClick={handelClearClick}>Clear Text</button>


            </div>
            <div className='container my-3' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h2>Your text here</h2>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} characters. </p> 
                
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read.</p>
                <h2>Preview</h2>
                <p>{text.length>0 ? text : "Nothing to preview!"}</p>
            </div>
        </>
    )
}
