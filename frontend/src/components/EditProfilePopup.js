import React from 'react';
import PopupWithForm from '../components/PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {

  // Стейт, в котором содержится значение инпута
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  // Подписка на контекст
  const currentUser = React.useContext(CurrentUserContext);

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    if (!currentUser.name || !currentUser.about) {
      return;
    }
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]); 

  // Обработчик изменения инпута обновляет стейт
  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      name,
      about: description,
    });
  } 

  return(
    <PopupWithForm name="user" title="Редактировать профиль" isOpen={props.isOpen}  onClosePopup={props.onClose} onSubmit={handleSubmit} onUpdateUser={props.onUpdateUser}>
    <label className="popup__form-field">
      <input type="text" id="name-input" className="popup__input popup__input_type_name"  placeholder="Имя" 
             name="name" required minLength="2" maxLength="40" value={name} onChange={handleChangeName}/>
      <span id="name-input-error" className="popup__input-error"></span>
    </label>
    <label className="popup__form-field">
      <input type="text" id="work-input"  placeholder="О себе" className="popup__input popup__input_type_work" 
             name='about' required minLength='2'  maxLength='200' value={description} onChange={handleChangeDescription}/>
      <span id="work-input-error" className="popup__input-error"></span>
    </label>
    <button className="popup__submit-btn popup__submit-btn_edit"  type="submit">
      Сохранить
    </button>
  </PopupWithForm>
  );
}

export default EditProfilePopup; 