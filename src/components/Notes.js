import React from 'react';


function Notes({notes, delete:handleNoteDelete}) {

    return (
        <>
            <h4 className="my-3 mx-4 text-muted">Notas</h4>
            <div className="row">
                {notes.map((note, i) => <NoteItem delete={handleNoteDelete} index={i} key={i} {...note} />)}
            </div>
        </>
    )
}

function NoteItem({title, description, delete:handleNoteDelete, index}){
    return (
        <div className="col-md-6">
            <div className="card bg-light text-center mb-3">
                <div className="card-body">
                    <div className="d-flex justify-content-between w-100">
                        <h5>{title}</h5>
                        <div className="d-flex">
                            <i class="fas fa-edit p-2"></i>
                            <i class="fas fa-times p-2" onClick={() => handleNoteDelete(index)}></i>
                        </div>
                    </div>
                    <hr></hr>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default Notes
