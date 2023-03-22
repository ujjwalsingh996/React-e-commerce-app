import React, { useState } from "react";
const Fetch = () => {
  const [movies, setMovies] = useState([]);
//   fetch("https://swapi.dev/api/films/")
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       setMovies(data.results);  
//     });
    async function Fetch() {
        const response = await fetch('https://swapi.dev/api/films/')
        const data = await response.json();
        setMovies(data.results)
    }
    
};
