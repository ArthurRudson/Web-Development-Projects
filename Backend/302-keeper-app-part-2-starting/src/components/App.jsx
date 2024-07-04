import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
     {notes.map(newNotes => (
      <Note 
      key={newNotes.key}
      tit={newNotes.title}
      cont={newNotes.content}
      />
     ))} 
      <Footer />
    </div>
  );
}

export default App;
