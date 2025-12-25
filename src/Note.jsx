import { useState } from 'react'

function Note(props){
function handleDelete(event){
    // const input=event.target.id;
    props.handleDelete(props.id);

}

    return(
        <div className='note'>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleDelete} className='delete-button'>Delete</button>
        </div>

    );
}
export default Note;
