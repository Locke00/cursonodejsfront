import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axios from "axios";

import "./App.css";

function App() {
  const [products, setProducts] = useState([]);  //devuelve un array con 2 elemento, uno es la variable, y una funcion seteadora de la variable
  const [prev, setPrev] = useState(null);
  const [next, setNext] = useState(null);

  useEffect(() => {
    // Petición HTTP GET utilizando Axios.
    axios("http://localhost:8080/api/products")
    //axios("http://coderapi/api/events")
      .then((res) => {
        // Al recibir la respuesta, se actualizan los estados con los datos de la respuesta.
        console.log(res.data.response);
        setProducts(res.data.response.docs); // Actualiza los productos con los documentos recibidos.
        setPrev(res.data.response.prevPage); // Establece la página anterior.
        setNext(res.data.response.nextPage); // Establece la página siguiente.
      })
      .catch((err) => console.log(err)); // Manejo de errores en la petición.
  }, []);


  return (
    <>
      <nav className="navbar navbar-expand-md bg-danger w-100">
        <div className="container-fluid">
          <a className="btn btn-danger fs-5 m-1 me-3" href="#">
            HOME
          </a>
          <button
            className="navbar-toggler bg-light m-1"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {/*<img src="/logo.jpeg" alt="Logo Venta de Garage"></img>*/}
              <a
                className="btn btn-light fs-5 m-1"
                aria-current="page"
                href="#"
              >
                Home
              </a>
              <a className="btn btn-light fs-5 m-1" href="#">
                Formulario
              </a>
              <a className="btn btn-light fs-5 m-1" href="#">
                Orders
              </a>
              <a className="btn btn-light fs-5 m-1" href="#">
                Registracion
              </a>
              <a className="btn btn-light fs-5 m-1" href="#">
                Login
              </a>
              <span className="btn btn-danger fs-5 m-1" id="#">
                Sign out
              </span>
            </div>
          </div>
        </div>
      </nav>




      <main className="flex-grow-1 p-3 m-auto my-2">
        <h1>Venta de Garage</h1>
        <span className="m-auto d-flex justify-content-between align-items-center">
          <img
            style={{width: "44px", padding: "2px"}}
            id="search"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABFdJREFUaEPtmWnIlUUUx38m2qYlGJmYJZWlRBJI+CEiTM0PttCOJFGpUaiIgiSZUmqmImUoRqCmFdkepKUGrpQSBX6JJG1R6YOgpeWCii3zl5kYnubeZ859vHRfeA9cXl7umf+Z/8yZs90OtHHp0Mb3TzuB//sGq9zAecCdwL1AP+AS/xGng/6zE/gQ+BQ40QyyjRDoAcwGHgbOz9zUceANYAZwIHNNlpqVwExgCqDTb0RE5EV/AI2s/8+aXALdgbXOFW46K1ZhE3AP8HtVvBwC/f3mr0wYOwR8ArwH/AT84nUuB64B7gfuBrol1u4GhgL7qpAoI9AL+ArQ31h+9q7wOnC6ZAPnAqPdI54K9C7oisQgQAfRkNQjcJE7oS9cFLmhgPw+MAo4ZbR4AfAucEdh3XZgMHDSiHdGvR6BxS5ijCuAzgeebsRQtOZV4MkCxvPu/+cawa1FoI875R+AjhGo4rl8uqqcA3wGDI+AjgFXAL9ZwWsReBsYGYH96B+lFb+WvtxTmEp+QV4GJlsNpAgoOR0GOkdg9wEfWcFL9J8ClkQ6yt6XAn9b7KQIPOgfW8D5DrjeAmrQVVaOb+EWHziyIVIE3vJlQgCZ5UuAbFCD4jKXBx6P9M1BIkXgG2BgBHozsM2wKYvqAz4JhjV63CMsACkCyoxxwlFE2msBNeje6DL1jkj/20TeqQuXIqAE1SladSGgIqwZohIjzsJ/ABdbDKUIHAG6RCBdgaMWUIOu7MheEB2UDixbUgRUn6gQC9LXJ7VsUIPitS7ffB/py1XlstmSIrAVUDgLMgTYmI1oUxwGfB4tUQAxlewpAq8BT0Sg5tBm4PCS6wkmRfpLgbGG9cliTtXi6ghELqWrboaoLI9dRrWWaq5sSd2ASghFBpW/QRSvP8hGzVN8BFgZqeoxX2aNeLWKueUu9j8WgavbujpvX1laOhxVuz0j7Xm+6ckCCEq1CKgl1KbjfKBGRnVSVZFNtaFxY/MXoJY1tKTZNuo1NAudK00sIGmcMj0bPa24yM2Mxhe+mgNMawS3HgElmS9dGT2gALyi4F65duU2q4C7CgsqVbtlTb0e1deAXCoW+e8L7l286W7kzxIGaurH+Fa02NRrqer/R/3gK/cw/tUrIyBFjQ3X+5avaOBX4GMfofZ4HxamNqoMHsYq6sDKRGW1phwmySEgQDUda/wIxGSghrKy7+2J78wkcgkEW2punq3AQJO4Cd71bnMly4YElmZICuNZYiUgUA255vrZUJYR38C/4hOXSuYgmkysq0KiEQLBnspexfKH3AO8CtD8VK6mR73fv4fN3vVUpNWSYukS9FQTqTaqK1UIlGFbvldo1dQjnkNlRadWISCyiljvWEm0EgGR0I8mmooU5TpgV+pKW41AIKEEGfamH1QW1PLHViSgvSofaGakX3OeqfeYWpWA9nyrG7tvKYsErUygbO9nvm8nkHVMTVRqv4EmHm4WdJu/gX8AUZOmMeH+ThoAAAAASUVORK5CYII="
          />
        </span>



        <section className="d-flex flex-wrap justify-content-evenly">
          {products.map((each) => (

            <article key={each._id} className="d-flex flex-wrap">
              <div className="card" style={{width: "18rem"}}>
                <img src={each.photo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{each.title}</h5>
                  <p className="card-text">Precio: {each.price}</p>
                  <p className="card-text">Stock: {each.stock}</p>
                </div>
              </div>
            </article>
          ))}


          <span className="w-100 d-flex justify-content-center">
            {prev && <a className="btn btn-danger fs-5 m-4 mt-0" href={`/?title={{filter}}&page={{prev}}`}>PREV</a>}
            {next && <a className="btn btn-danger fs-5 m-4 mt-0" href={`/?title={{filter}}&page={{next}}`}>NEXT</a>}



          </span>
        </section>


      </main>






      <footer className="bg-danger w-100">
        <p className="text-light m-2 text-center fw-bolder fs-4">
          Venta de Garage
        </p>
      </footer>
    </>
  );
}

export default App;
