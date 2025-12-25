import { useState } from 'react'
import './App.css'
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import notes from "./noteEntry.js";
import React from 'react';
import InputArea  from './InputArea.jsx';
function App() {
  const [items,setItems]=useState(notes);
 function addItem(newNote){
setItems((prevItems)=>{
  return [...prevItems,newNote];
});
 }

function handleDelete(id){
  setItems((prevItems)=>{
    return prevItems.filter((item,index)=>{
      return index !== id;
    });
  });
}


  return (
    <>
    <Header></Header>
    <InputArea
    addItem={addItem}
    ></InputArea>
    <div className="notes-container">
    {items.map((Item,index)=>{
      return(
        <Note
        key={Item.id}
        id={index}
        title={Item.title}
        content={Item.content}
        handleDelete={handleDelete}
        />
      );
    })}
    </div>
    <Footer></Footer>
    </>
  )
}

export default App
