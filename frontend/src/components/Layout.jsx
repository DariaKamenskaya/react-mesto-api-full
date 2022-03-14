// Пути к изображениям внутри сборки
import { Link, Outlet } from 'react-router-dom';
import logoPath from '../images/logo.svg'; 

function Layout() {
    return (
      <header className="header">
        <a href="#" className="header__link"><img src={logoPath} alt="Логотип" className="header__logo"/></a>
        <Outlet />
      </header>
    );
}

export default Layout;