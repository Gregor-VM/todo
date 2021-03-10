import React from 'react';
import Nav from './components/Nav';
import Input from './components/Input';
import Notes from './components/Notes';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Global.css';
import {useState} from 'react';

function App() {

  const [notes, setNotes] = useState([{title: "Titulo", description:"Este es un ejemplo genério y corto de como sería una descripción"}, {title: "Titulo 2", description:"Este es un ejemplo genérico y corto de como sería una descripción"}]);

  const handleNoteSetter = (note) => setNotes(prev => [...prev, note]);
  const handleNoteDelete = (index) => setNotes(prev => prev.filter((item, i) => index !== i));

  return (
    <>
    <Nav />
    <div className="row m-0">
      <div className="col-md-6 col-12">
        <Input setter={handleNoteSetter} />
      </div>
      <div className="col-md-6 col-12">
        <Notes notes={notes} delete={handleNoteDelete} />
      </div>
    </div>
    </>
  )
}

export default App
