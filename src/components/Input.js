import React from 'react';
import {useState} from 'react'

function Input({setter, editing, setEdit:handleSetEdit}) {

    const [note, setNote] = useState({title: '', description: ''});
    const handleNote = (e) => editing ? handleSetEdit(e.target) : setNote(prev => ({...prev, [e.target.name] : e.target.value}) );

    const handleSendNote = () => {
        setNote({title:'', description:''});
        if(editing !== {}) return setter(editing);
        return setter(note);
    };

    return (
        <>
        <h4 className="my-3 mx-4 text-muted">Añadir nota</h4>
        <form>
            <div className="form-group m-3">
                <input type="text" name="title" className="form-control my-3" placeholder="Titulo" onChange={handleNote} value={editing?.title || note.title}></input>
                <textarea name="description" className="form-control my-3" placeholder="Descripción" onChange={handleNote} value={editing?.description ||note.description} cols="30" rows="10"></textarea>
                <input type="button" className="btn btn-primary btn-block" onClick={handleSendNote} value={editing.index === undefined ? 'Guardar' : 'Guardar cambios'}/>
            </div>
        </form>
        </>
    )
}

export default Input
