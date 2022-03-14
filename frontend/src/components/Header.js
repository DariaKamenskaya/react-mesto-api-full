// Пути к изображениям внутри сборки
import { Link } from 'react-router-dom';
import logoPath from '../images/logo.svg'; 

function Header(props) {

  return (
    <header className="header">
      <div className="header__nav">
        <a href="#" className="header__link"><img src={logoPath} alt="Логотип" className="header__logo"/></a>
        <div className="header__nav_right">
          <p className={'header__status'}>{props.emailUser}</p> 
          <Link to={props.nav} className={'header__link header__status'} onClick={props.onLogout}>{props.navStatus}</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;