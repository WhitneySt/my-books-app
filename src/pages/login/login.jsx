import React, { useContext, useState } from 'react';
import "./login.scss";
import useForm from '../../hooks/useForm';
import { getUserByEmailAndPassword } from '../../services/userSevice';
import { AppContext } from '../../routes/router';

const Login = () => {
  // const [dataForm, setDataForm] = useState({});

  // const handleChangeInputs = (event) => {
  //   const { name, value } = event.target;
  //   setDataForm({
  //     ...dataForm,
  //     [name]: value
  //   });
  // }

  // const reset = () => {
  //   setDataForm({});
  // }

  const { dataForm, handleChangeInputs, reset } = useForm();

  const { setIsUserLogged, setUserLogged } = useContext(AppContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userLogged = await getUserByEmailAndPassword(dataForm.email, dataForm.password);
    if (userLogged) {
      setUserLogged(userLogged);
      setIsUserLogged(true);
      alert(`Bienvenidx ${userLogged.name}`)
    } else {
      alert('Por favor indique sus credenciales');
    }

  }

  return (
    <main className='login'>
      <h1>Inicio de sesión</h1>
      <form onSubmit={handleSubmit}>
        <label>Correo electrónico:</label>
        <input type="text" placeholder='Ingrese su correo' name='email' value={dataForm?.email || ''} onChange={handleChangeInputs} />
        <label>Contraseña:</label>
        <input type="password" placeholder='Ingrese su contraseña' name='password' value={dataForm?.password || ''} onChange={handleChangeInputs} />
        <button type="submit">Inicie sesión</button>
      </form>
    </main>
  )
}

export default Login