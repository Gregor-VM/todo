import React from 'react';
import {useState} from 'react'

function Input() {
    
    const [noteDesc, setNoteDesc] = useState('');
    const [noteTitle, setNoteTitle] = useState('');

    const handleNoteDesc = (e) => setNoteDesc(e.target.value);
    const handleNoteTitle = (e) => setNoteTitle(e.target.value);
    const handleSendNote = () => console.log(noteDesc + noteTitle);

    return (
        <>
        <h4 className="my-3 mx-4 text-muted">Añadir nota</h4>
        <form>
            <div className="form-group m-3">
                <input type="text" className="form-control my-3" placeholder="Titulo" onChange={handleNoteTitle} value={noteTitle}></input>
                <textarea name="" className="form-control my-3" placeholder="Descripción" onChange={handleNoteDesc} value={noteDesc} cols="30" rows="10"></textarea>
                <input type="button" className="btn btn-primary btn-block" onClick={handleSendNote} value="Guardar"/>
            </div>
        </form>
        </>
    )
}

export default Input
