import { useState } from "react";
import Formulario from "../components/formulario";
import axios from "axios";

function Contacto() {
  const [userData, setUserData] = useState({
    nombre: "",
    email: "",
    apodo: "",
    about: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const manejarCambio = (e) => {
    setSuccess(false);
    setError(false);
    const identificador = e.target.id;
    const newValue = e.target.value;
    setUserData({ ...userData, [identificador]: newValue });
  };

  const enviodeDatos = (e) => {
    e.preventDefault();
    axios
      .post("./#", userData)
      .then((res) => {
        setSuccess(true);
        console.log(res);
      })
      .catch((e) => {
        setError(true);
        console.log(e);
      });
  };

  return (
    <>
      <Formulario manejarCambio={manejarCambio} enviodeDatos={enviodeDatos} />
      {success && alert("salio bien")}
      {error && alert("salio mal")}
    </>
  );
}

export default Contacto;
