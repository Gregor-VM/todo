import React from "react";
import NoteItem from "./NoteItem";

function Notes({ notes, delete: handleNoteDelete, edit: handleNoteEdit }) {
  return (
    <>
      <div className="col-12 col-md-6">
        <h4 className="my-3 mx-4 text-muted">Notas</h4>
        <div className="row">
          {notes.map((note, i) => {
            if (i < 4) {
              return (
                <div className="col-md-6">
                  <NoteItem
                    edit={handleNoteEdit}
                    delete={handleNoteDelete}
                    index={i}
                    key={i}
                    {...note}
                  />
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
      {notes.map((note, i) => {
        if (i >= 4) {
          return (
            <div className="col-md-3 mt-3">
              <NoteItem
                edit={handleNoteEdit}
                delete={handleNoteDelete}
                index={i}
                key={i}
                {...note}
              />
            </div>
          );
        }
        return null;
      })}
    </>
  );
}

export default Notes;
