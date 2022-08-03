import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [personajes, setPersonajes] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=3a98ecbdd119321374d9a4c72c461aed&hash=cfcb76b520d12104b8962da709212942"
      )
      .then((res) => {
        setPersonajes(res.data.data.results);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(personajes);
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
              />
              <div className="card-body">
                <h5 className="card-title">{per.name}</h5>
                <p className="card-text">{per.modified}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
