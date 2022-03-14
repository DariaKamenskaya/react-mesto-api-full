import React from 'react';
import PopupWithForm from '../components/PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditAvatarPopup(props) {

  // Подписка на контекст
  const currentUser = React.useContext(CurrentUserContext);
  // avatar должна быть объявлена здесь, чтобы реф мог иметь к ней доступ
  const avatarLink = React.useRef('');

  function handleSubmit(e) {
    e.preventDefault();
    avatarLink.current.focus(); 
    currentUser.avatar = avatarLink.current.value;
    props.onUpdateAvatar(currentUser);
  } 

  return(
    <PopupWithForm name="avatar" title="Обновить аватар" isOpen={props.isOpen}  onClosePopup={props.onClose} onSubmit={handleSubmit} onUpdateAvatar={props.onUpdateAvatar}>
    <label className="popup__form-field">
      <input ref={avatarLink} type="url" id="url-input_avatar" placeholder="Ссылка на картинку" 
             className="popup__input popup__input_type_avatar-img" name='link' 
              required />
      <span id="url-input_avatar-error" className="popup__input-error"></span>
    </label>
    <button className="popup__submit-btn popup__submit-btn_avatar"  type="submit"> 
      Сохранить
    </button>
  </PopupWithForm>
  );
}

export default EditAvatarPopup; 