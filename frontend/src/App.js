import React, { useState } from "react";

import "./App.css";
import photo from "./images/photo.jpeg";

import Header from "./components/Header";

function App() {
  const [projects, setProjects] = useState([
    "Desenvolvimento de app",
    "Front-end web",
  ]);

  function handleAddProject() {
    setProjects((project) => [...project, `Novo projeto ${Date.now()}`]);
  }

  return (
    <>
      <Header title={"Projects"} />

      <img width={300} src={photo} alt="Photo" />

      <ul>
        {projects.map((project) => (
          <li key={project}>{project}</li>
        ))}
      </ul>

      <button type={"button"} onClick={handleAddProject}>
        Adicionar projeto
      </button>
    </>
  );
}

export default App;
