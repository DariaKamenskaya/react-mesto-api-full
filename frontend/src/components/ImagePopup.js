import React from 'react';

class ImagePopup extends React.Component {

  render() {
    if (this.props.card !== null ) { 
      return (
        <section className="popup popup_img popup_is-opened">
          <div className="popup__content popup__content_img" >
            <button className="popup__close popup__close_img" type="button" onClick={this.props.onClosePopup}></button>
            <img src={this.props.card.link} alt={this.props.card.name} className="popup__image" /> 
            <h3 className="popup__title popup__title_img">{this.props.card.name}</h3> 
          </div>
        </section>
      );
     } else {
        // для плавного открытия попапа
        return (
          <section className="popup popup_img"></section>
        );
    } 
  }
}

export default ImagePopup; 