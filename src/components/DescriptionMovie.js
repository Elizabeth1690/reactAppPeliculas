import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
const apiMarvel =
  "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=3a98ecbdd119321374d9a4c72c461aed&hash=cfcb76b520d12104b8962da709212942";

const DescriptionMovie = () => {
  const [descriptionMovie, setDescriptionMovie] = useState([]);
  useEffect(() => {
    axios
      .get(apiMarvel)
      .then((res) => {
        setDescriptionMovie(res.data.data.results);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {descriptionMovie.map((des) => (
        <div className="col  mt-5" key={des.id}>
          <div className="card" style={{ width: "18rem", height: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">{des.name}</h5>
              <p className="card-text">{des.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DescriptionMovie;
