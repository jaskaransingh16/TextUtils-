import React, { useState } from 'react'
import PropTypes from 'prop-types'
export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("uppercase is clicked");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("success : your text is successfully uppercased !! :)")
    }
    const handleOnChange = (event) => {
        console.log("onchange");
        setText(event.target.value);
    }
    const handleClear = () => {
        setText("")
    }
    const myStyle=() =>{
        if(darkMode.backgroundColor == 'white'){
            setDarkMode({
                color:"white",
                backgroundColor:"black",
                
            })
            setBtnText("enable light mode")
        }
        else{
            setDarkMode({
                color:"black",
                backgroundColor:"white"
            })
            setBtnText("enable dark mode")
        }

    }
    const handleCopy=(event)=>{
        let text=document.getElementById("mybox")
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const [text, setText] = useState('enter the text here');
    const [darkMode,setDarkMode]=useState({
        backgroundColor:"white",
        color: "black"
    });
    const [btnText,setBtnText]=useState("enable dark mode")

    return (
        <>
            <div>
                <div className="mb-5 my-2" style={darkMode}>
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
                </div>
                <button type="button" onClick={handleUpClick} className="btn btn-primary mx-2">{props.buttonText}</button>
                <button type="button" onClick={handleClear} className="btn btn-primary">clear</button>
                <button type="button" onClick={handleCopy} className="btn btn-primary mx-2">Copy Text</button>
                <button type="button" onClick={myStyle} className="btn btn-secondary mx-2">{btnText}</button>
            </div>
            <div className="container my-8">
                <h1>Your Text Summary</h1>
                <p>The number of words is {text.length} and the number of chatracters is {text.split(" ").length}</p>
            </div>

        </>
    )
}
TextForm.prototype = {
    heading: PropTypes.string,
    buttonText: PropTypes.string
};
TextForm.defaultProps = {
    buttonText: "set button text",
    buttonText2: "enter the button name",
    heading: "enter the heading"
};
