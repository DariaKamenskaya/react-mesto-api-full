import React from 'react';

function Card(props) {

  // handleClick = handleClick.bind(this);
  // handleLikeClick = handleLikeClick.bind(this);
  // handleDeleteClick = handleDeleteClick.bind(this);
  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = props.card.owner === props.currentUser._id;

  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = (
  ` ${isOwn ? 'element__remove-button' : 'element__remove-button_hidden'}`
  ); 

  let isLiked = false;

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  if (props.card.likes.length > 0) {
    isLiked = props.card.likes.some(i => i === props.currentUser._id); // i._id
  }

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = (
    `element__heart-button  ${isLiked ? 'element__heart-button-active' : ' '}`
  );

  function handleClick() {
    props.onCardClick(props.card);
  } 

  function handleLikeClick()  {
    props.onCardLike(props.card, props.currentUser,  props.setCards);
  }

  function handleDeleteClick()  {
    props.onCardDelete(props.card,  props.setCards);
  }

  return(
    <article className="element">
      <img src={props.card.link} alt={props.card.name} className="element__image"  onClick={handleClick} />
      <button className={cardDeleteButtonClassName}  type="button" onClick={handleDeleteClick}></button>
      <div className="element__title-block">
        <p className="element__title">{props.card.name}</p>
        <div className="element__likes">
          <button className={cardLikeButtonClassName}  type="button" onClick={handleLikeClick}></button>
          <p className="element__likes-number">{props.card.likes.length}</p>
        </div>
      </div>
    </article>
  );
}

export default Card; 