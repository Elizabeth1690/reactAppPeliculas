import React from "react";

const NewMovies = () => {
  const formMovies = (e) => {
    e.preventDefault();
    const title = e.target.titleMovies.value;
    const img = e.target.imgMovies.value;
    const description = e.target.descripcionMovies.value;
    const fecha = e.target.fechaMovies.value;

    /*axios
      .post(baseURL, {
        title: "Hello World!",
        body: "This is a new post.",
      })
      .then((response) => {
        setPost(response.data);
      });*/

    // addNotes(title, description);
    //consultNotes();
    e.target.reset();
  };
  return (
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
  );
};

export default NewMovies;
