import React from "react";
import { useState } from "react";
import notes from "./noteEntry.js";
function InputArea(props){
const [input,setInput]=useState(
    {
        title: "",
        content: ""
    }
);


function handleChange(event){
  const newValue=event.target.value;
  const inputName=event.target.name;
  setInput((prevValue)=>{
    return {...prevValue, [inputName]: newValue};
  })

}
function addItem(event){
    event.preventDefault();
    const newNote={
      id:notes.length+1,
      title:input.title,
      content:input.content
    };
    props.addItem(newNote);
    setInput({
        title: "",
        content: ""
    });
 
}
  return(
    <div > 
        <form className="form">
      <input className="input" onChange={handleChange} type="text" placeholder="Title" name="title" value={input.title}/>
      <textarea className="textarea" onChange={handleChange}  placeholder="Take a note...   "  rows={3} name="content" value={input.content} />
      <button className="add-button" onClick={addItem} type="submit" >
        <span>Add</span>
      </button>
      </form>
      
    </div>
  );
}
export default InputArea;