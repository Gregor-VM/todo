import React from 'react';
import Nav from './components/Nav';
import Input from './components/Input';
import Notes from './components/Notes';

function App() {
  return (
    <>
    <Nav />
    <div className="row">
      <div className="col-md-6 col-12">
        <Input/>
      </div>
      <div className="col-md-6 col-12">
        <Notes/>
      </div>
    </div>
    </>
  )
}

export default App
