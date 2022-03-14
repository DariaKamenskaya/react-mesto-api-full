import React, { useState } from 'react';
import * as auth from '../components/auth';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import InfoTooltip from '../components/InfoTooltip';


export default function Register() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const [infoPopup, setInfoPopup] = useState({
    isOpenLoginPopup: false,
    errorLogin: false,
    message: ''
  });

  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    auth
        .register(
          values.email,
          values.password
        )
        .then((res) => {
          if(res.data){
            setInfoPopup({
              message: 'Успешно зарегестрировались',
              errorLogin: true,
              isOpenLoginPopup: false
            });
            openPopup();
          } else {
            setInfoPopup({
              message: 'Что-то пошло не так!',
              errorLogin: false,
              isOpenLoginPopup: false
            });
            openPopup();
          }
        });
  };

  const openPopup = () => {
    setInfoPopup((prevState) => ({
      ...prevState,
      isOpenLoginPopup: true,
    }));
  }

  const closePopup = () => {
    setInfoPopup((prevState) => ({
      ...prevState,
      isOpenLoginPopup: false,
    }));
    if (infoPopup.errorLogin) navigate("/sign-in");
  };

  return (
    <div className="register">
        <Header nav={'/sign-up'} navStatus={'Войти'} emailUser={''}/>
        <h1 className="register__welcome">Регистрация</h1>
        <form onSubmit={handleSubmit} className="register__form">
          <input id="email" name="email" type="email" placeholder="Email" className="register__input"
                 value={values.email} onChange={handleChange} />
          <input id="password" name="password" type="password" placeholder="Пароль" className="register__input"
                 value={values.password} onChange={handleChange} />
            <div className="register__button-container">
              <button type="submit" className="register__link" onSubmit={handleSubmit}>Зарегистрироваться</button>
            </div>
        </form>
        <div className="register__signin">
          <p>Уже зарегестрировались?</p>
          <Link to="/sign-in" className="register__login-link">Войти</Link>
        </div>
        {(infoPopup.isOpenLoginPopup) && <InfoTooltip  errorLogin={infoPopup.errorLogin} onClosePopup={closePopup}/> }
      </div>
  );
}

