import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";

function createCard(emojip) {
  return (
    <Card
      id={emojip.id}
      emoji={emojip.emoji}
      name={emojip.name}
      meaning={emojip.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;
