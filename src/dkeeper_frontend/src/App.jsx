import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import { dkeeper_backend } from "../../declarations/dkeeper_backend";


function App() {

  const [notes, setNotes] = useState([]);

  function saveElement(note) {
    setNotes( (prev) => {
      dkeeper_backend.CreateNotes(note.title, note.content);
      return [note, ...prev] ;
    });
    }

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const notesArray = await dkeeper_backend.readNotes();
    setNotes(notesArray);
  };

  function deleteNote(id) {
    setNotes( prev => {
      return prev.filter((prev, index) => {
        return index != id ;
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onSave={saveElement} />
      {notes.map((note, index) => {
        return( 
          <Note
          key={index}
          title={note.title} 
          content={note.content} 
          id={index} 
          onDelete={deleteNote} />
          );
      })}
      <Footer />
    </div>
  );
}

export default App;