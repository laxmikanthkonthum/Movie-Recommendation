import React from "react";
import "./styles.css";
import { useState } from "react";

const DB = {
  Hindi: [
    { Name: "3 Idiots", Streaming: "Prime Video" },
    { Name: "Andhadhun", Streaming: "Neflix" }
  ],
  Telugu: [
    {
      Name: "Dookudu",
      Streaming: "Prime"
    },
    {
      Name: "Pokiri",
      Streaming: "Youtube"
    }
  ],
  English: [
    {
      Name: "Curios case of Benjamin Button",
      Streaming: "Prime"
    },
    {
      Name: "Orphan",
      Streaming: "Prime"
    },
    {
      Name: "Spiral",
      Streaming: "Netflix"
    },
    {
      Name: "The Wolf of Wall Street",
      Streaming: "Prime"
    }
  ]
};

export default function App() {
  const [lang, setLang] = useState("English");
  function clickHandler(lang) {
    setLang(lang);
  }
  return (
    <div className="App">
      <h1>Movie Recommendation </h1>
      <p>You can see my fav Movie Recommendations</p>

      <div>
        {Object.keys(DB).map((lang) => (
          <button
            onClick={() => clickHandler(lang)}
            style={{
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem",
              margin: "10px"
            }}
          >
            {lang}
          </button>
        ))}
      </div>
      <div style={{ textAlign: "left" }}>
        <ul>
          {DB[lang].map((movie) => (
            <li
              key={movie.Name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid black",
                width: "70%",
                margin: "10px",
                borderRadius: "0.5rem"
              }}
            >
              <div style={{ fontSize: "larger" }}> {movie.Name} </div>
              <div style={{ color: "red" }}>
                {" "}
                Available In: {movie.Streaming}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
