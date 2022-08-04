import React from "react";
import axios from "axios";
import Home from "./Home";
import { useState } from "react";
const apiMarvel =
  "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=3a98ecbdd119321374d9a4c72c461aed&hash=cfcb76b520d12104b8962da709212942";

const NewMovies = () => {
  const [newMovie, setnewMovie] = useState([]);
  const formMovies = (e) => {
    e.preventDefault();
    const title = e.target.titleMovies.value;
    const img = e.target.imgMovies.value;
    const description = e.target.descripcionMovies.value;
    const date = e.target.fechaMovies.value;
    axios
      .post(apiMarvel, {
        title,
        img,
        description,
        date,
      })
      .then((response) => {
        console.log(response + "soy actualizar");
        setnewMovie(response.data);
        console.log("pelicula actualizada");
      })
      .catch((error) =>
        console.log(
          error,
          "los datos se encuentran actualizados dando clic en  config y luego en data"
        )
      );
    localStorage.setItem("newMovies", JSON.stringify(newMovie));
    // addNotes(title, description);
    //consultNotes();
    e.target.reset();
  };
  return (
    <div>
      <form id="form-movies" onSubmit={formMovies}>
        <input
          type="text"
          placeholder="Escribe el titulo"
          className="title-movies"
          id="titleMovies"
          name="titleMovies"
        />
        <input
          type="text"
          placeholder="Ingresa la url de la imagen"
          className="img-movies"
          id="imgMovies"
          name="imgMovies"
        />
        <input
          type="text"
          placeholder="Escribe la descripción"
          className="descripcion-movies"
          id="descripcionMovies"
          name="descripcionMovies"
        />
        <input
          type="text"
          placeholder="Escribe la fecha"
          className="fecha-movies"
          id="fechaMovies"
          name="fechaMovies"
        />
        <button className="btn-save " type="submit" id="btn-save">
          Guardar
        </button>
      </form>
      <Home newMovie />
    </div>
  );
};

export default NewMovies;
