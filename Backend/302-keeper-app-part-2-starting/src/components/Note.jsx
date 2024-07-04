import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.tit}</h1>
      <p>{props.cont}</p>
    </div>
  );
}

export default Note;
