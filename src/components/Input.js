import React from 'react';
import {useState} from 'react'

function Input({setter}) {

    const [note, setNote] = useState({title:'', description:''});
    const handleNote = (e) => setNote(prev => ({...prev, [e.target.name] : e.target.value}) );
    
    const handleSendNote = () => {
        setNote({title:'', description:''});
        return setter(note);
    };

    return (
        <>
        <h4 className="my-3 mx-4 text-muted">Añadir nota</h4>
        <form>
            <div className="form-group m-3">
                <input type="text" name="title" className="form-control my-3" placeholder="Titulo" onChange={handleNote} value={note.title}></input>
                <textarea name="description" className="form-control my-3" placeholder="Descripción" onChange={handleNote} value={note.description} cols="30" rows="10"></textarea>
                <input type="button" className="btn btn-primary btn-block" onClick={handleSendNote} value="Guardar"/>
            </div>
        </form>
        </>
    )
}

export default Input
