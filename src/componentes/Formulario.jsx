import { useState } from "react";

const Formulario = () => {
  //Estados del formulario
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  //Estado para los errores
  const [error, setError] = useState(false);
  const [errorPassword, setErrorPassword] = useState (false)
  //Función antes de enviar el formulario
  const validarDatos = (e) => {
    e.preventDefault();
    //Validación;
    if 
        (nombre === "" || email === "" || password === "" || passwordConfirm === "") 
        {
        setError(true);
        return;
        }
    else if
        (password != passwordConfirm)
        {
            setError(false);
            setErrorPassword(true);
            return;
        }
    else{
        setErrorPassword(false)
    }    
    
  };
  return (
    <>
    
      <form className="formulario text-center p-5" onSubmit={validarDatos}>
        <div className="form-group">
          <label>Nombre</label>
          <input type="text" name="nombre" className="form-control" onChange={(e) => setNombre(e.target.value)} value={nombre} />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            />
        </div>
        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            />
        </div>
        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="password"
            name="passwordConfirm"
            className="form-control"
            onChange={(e) => setPasswordConfirm(e.target.value)}
            value={passwordConfirm}
            />
        </div>
        <button type="submit" className="btn btn-warning py-3 px-5 mt-5 text-white fw-bold">
          Enviar
        </button>
            {error ? <p>Todos los campos son obligatorios</p> : null}
            {errorPassword ? <p>Las contraseñas no coinciden</p> : null}
      </form>
      


    </>
  );
};
export default Formulario;
