// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import  { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./App.css";

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [notes, setNotes] = useState({});
  const [note, setNote] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const formattedDate = date.toISOString().split("T")[0];
    setNote(notes[formattedDate] || "");
  };

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const saveNote = () => {
    const formattedDate = selectedDate.toISOString().split("T")[0];
    setNotes((prevNotes) => ({
      ...prevNotes,
      [formattedDate]: note,
    }));
    setNote("");
  };

  const tileContent = ({ date, view }) => {
    const formattedDate = date.toISOString().split("T")[0];
    return view === "month" && notes[formattedDate] ? (
      <div className="note">{notes[formattedDate]}</div>
    ) : null;
  };

  return (
    <div className="App">
      <h1>My Calendar</h1>
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        tileContent={tileContent}
      />
      <div>
        <h2>Notes for {selectedDate.toDateString()}</h2>
        <textarea value={note} onChange={handleNoteChange} />
        <button onClick={saveNote}>Save Note</button>
      </div>
      <div>
        <h2>All Notes</h2>
        <ul>
          {Object.entries(notes).map(([date, note]) => (
            <li key={date}>
              <strong>{date}:</strong> {note}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
