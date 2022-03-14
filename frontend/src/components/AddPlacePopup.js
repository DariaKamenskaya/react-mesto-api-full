import React from 'react';
import PopupWithForm from '../components/PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import {CurrentCardsContext}  from '../contexts/CurrentCardsContext'

function AddPlacePopup(props) {


 // Подписываемся на контекст CurrentCardsContext
  const cardsData = React.useContext(CurrentCardsContext);
 // Стейт, в котором содержится значение инпута
  const [namePlace, setNamePlace] = React.useState('');
  const [linkPlace, setLinkPlace] = React.useState('');

  // Обработчик изменения инпута обновляет стейт
  function handleChangeNamePlace(e) {
    setNamePlace(e.target.value);
  }
    
  function handleChangeLinkPlace(e) {
    setLinkPlace(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    props.onAddPlace({
      name: namePlace,
      link: linkPlace
    }, cardsData);
  } 

  return(
    <PopupWithForm name="add" title="Новое место"  isOpen={props.isOpen}  onClosePopup={props.onClose} onSubmit={handleSubmit}>
      <label className="popup__form-field">
        <input type="text" id="place-input"  placeholder="Название" className="popup__input popup__input_type_place-name" 
               name='name' required minLength="2" maxLength="30" value={namePlace} onChange={handleChangeNamePlace} />
        <span id="place-input-error" className="popup__input-error"></span>
      </label>
      <label className="popup__form-field">
        <input type="url" id="url-input" placeholder="Ссылка на картинку" className="popup__input popup__input_type_place-img" 
               name='link' value={linkPlace} onChange={handleChangeLinkPlace} required />
        <span id="url-input-error" className="popup__input-error"></span>
      </label>
      <button className="popup__submit-btn popup__submit-btn_add"  type="submit"> 
        Создать
      </button>
    </PopupWithForm>
  );
}

export default AddPlacePopup; 