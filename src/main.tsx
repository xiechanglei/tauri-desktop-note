import React from "react"
import ReactDOM from "react-dom/client"
import { HashRouter, Routes, Route } from 'react-router-dom'
import { Init } from "./pages/Init"
import { Note } from "./pages/Note"
import "./css/reset/reset.css"
import "./css/theme/default.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Init />} ></Route>
        <Route path='/note' element={<Note />} ></Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
