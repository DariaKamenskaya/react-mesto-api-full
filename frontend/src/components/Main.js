import React from 'react'; 
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import {CurrentCardsContext}  from '../contexts/CurrentCardsContext'

function Main(props) {

   // Подписываемся на контекст CurrentUserContext
  const userData = React.useContext(CurrentUserContext);
  // Подписываемся на контекст CurrentCardsContext
  const cardsData = React.useContext(CurrentCardsContext);

  function CardList(props) {
    const cards = props.cards;
    const listCards = cards.map((card) =>
      <Card card={card} onCardClick={props.onCardClick} key={card._id} 
        currentUser={userData} onCardLike={props.onCardLike} setCards={props.setCards}
        onCardDelete={props.onCardDelete}/>
    );
    return (
      <section className="elements">
        {listCards}
      </section>
    );  
  }

  return (
    <main>
      <section className="profile">
        <div className="profile__avatar-conteiner">
          <div className="profile__avatar-overlay" onClick={props.onEditAvatar}></div>
          <img src={userData.avatar} alt={userData.name} className="profile__avatar"  />
          <button className="profile__avatar-button" onClick={props.onEditAvatar}></button>
        </div>
        <div className="profile__info">
          <div className="profile__title-block">
            <h1 className="profile__title">{userData.name}</h1>
            <button className="profile__edit-button" type="button"  onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__text">{userData.about}</p>
        </div>
        <button className="profile__add-button" type="button"  onClick={props.onAddPlace}></button>
      </section>
     <CardList cards={cardsData} onCardClick={props.onCardClick} onCardLike={props.onCardLike} setCards={props.setCards} onCardDelete={props.onCardDelete}/>  
    </main>
  );
}

export default Main;

