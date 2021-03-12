import React from 'react';
import Nav from './components/Nav';
import Input from './components/Input';
import Notes from './components/Notes';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Global.css';
import {useState, useEffect} from 'react';

function App() {

  const savedNotes = localStorage.getItem('notes');

  const [notes, setNotes] = useState(savedNotes !== null ? JSON.parse(savedNotes) : []);
  const [editNote, setEditNote] = useState({});

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes])

  const handleNoteSetter = (note) => {
    setEditNote({});
    if(note.index !== undefined) {
      setNotes(prev => prev.map((el, i) => i === note.index ? note : el));
    }else{
      setNotes(prev => [...prev, note]);
    }
  };
  const handleNoteDelete = (index) => setNotes(prev => prev.filter((item, i) => index !== i));
  const handleNoteEdit = (note) => setEditNote(note);

  const handleSetEdit = ({name, value}) => setEditNote(prev => ({...prev, [name] : value}));

  return (
    <>
    <Nav />
    <div className="row m-0">
      <div className="col-md-6 col-12">
        <Input setter={handleNoteSetter} editing={editNote} setEdit={handleSetEdit} />
      </div>
      <div className="col-md-6 col-12">
        <Notes notes={notes} delete={handleNoteDelete} edit={handleNoteEdit} />
      </div>
    </div>
    </>
  )
}

export default App
