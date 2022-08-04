import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import NewMovies from "./NewMovies";
import { useNavigate } from "react-router-dom";
const apiMarvel =
  "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=3a98ecbdd119321374d9a4c72c461aed&hash=cfcb76b520d12104b8962da709212942";

export default function Home() {
  let navigate = useNavigate();
  const [deleteMovie, setDeleteMovie] = useState([]);
  const [personajes, setPersonajes] = useState(() => {
    const saveMovie = localStorage.getItem("moviesData");
    if (saveMovie) {
      return JSON.parse(saveMovie);
    } else {
      return [];
    }
  });

  useEffect(() => {
    axios
      .get(apiMarvel)
      .then((res) => {
        setPersonajes(res.data.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  localStorage.setItem("movies", JSON.stringify(personajes));

  const deletefilme = () => {
    axios
      .delete(apiMarvel)
      .then((res) => {
        const prueba = res.data;
        console.log(prueba + "bnoooooooo");
        //alert("Esta segbnooooooooouro de eliminar la pelicula?");
        //setPersonajes([]);
      })
      .catch((error) => console.log(error + "llegue"));
  };
  return (
    <div className="App">
      <h1 className="title">¡ Bienvenidos a Marvel ! </h1>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {personajes.map((per) => (
          <div className="col  mt-5" key={per.id}>
            <div className="card" style={{ width: "18rem", height: "18rem" }}>
              <img
                src={` ${per.thumbnail.path}.${per.thumbnail.extension}`}
                className="card-img-top"
                style={{ width: "74%", height: "74%" }}
                onClick={() => {
                  navigate("/descriptionMovie");
                }}
              />
              <div className="card-body">
                <h5 className="card-title">{per.name}</h5>
                <p className="card-text">{per.modified}</p>
                <button className="btn-delete" onClick={() => deletefilme()}>
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
