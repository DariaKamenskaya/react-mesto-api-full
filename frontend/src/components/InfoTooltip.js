import React from 'react';
import success_icon from '../images/success-icon.svg';
import fail_icon from '../images/fail-icon.svg';


export default function InfoTooltip(props) {

    if (props.errorLogin) { 
      return (
        <section className="popup popup_login popup_is-opened" >
        <div className="popup__content popup__content_login" >
          <button className="popup__close popup__close_login"  type="button" onClick={props.onClosePopup}></button>
          <img src={success_icon}  alt='Успех' className="popup__icon-login" /> 
          <h3 className="popup__title popup__title_login">Вы успешно зарегистрировались!</h3> 
        </div>
        </section>
      );
     } else if (!props.errorLogin) {
        return (
          <section className="popup popup_login popup_is-opened" >
          <div className="popup__content popup__content_login" >
            <button className="popup__close popup__close_login"  type="button" onClick={props.onClosePopup}></button>
            <img src={fail_icon} alt='Ошибка' className="popup__icon-login" /> 
            <h3 className="popup__title popup__title_login">Что-то пошло не так! Попробуйте еще раз</h3> 
          </div>
          </section>
        );
    } else {
        // для плавного открытия попапа
        return (
          <section className="popup popup_login"></section>
        );
    }
}
