import { Link } from 'react-router-dom';
import logo from './../../public/images/logo-white.png';

const MenuSidebar = () => {
    return (
        <nav id="sidebar" className="expand">
            <div className="d-flex">
                <button className="toggle-btn" type="button">
                    <img src={logo}
                         width="32px" />
                </button>
                <div className="sidebar-logo">
                    <a href="/">System FCE</a>
                </div>
            </div>
            <ul className="sidebar-nav">
                <li className="sidebar-item">
                    <a href="/" className="sidebar-link">
                        <i className="bi bi-house-door"></i>
                        <span>Home</span>
                    </a>
                </li>
                
                
                <li className="sidebar-item">
                    <a href="#" className="sidebar-link collapsed has-dropdown" data-bs-toggle="collapse"
                        data-bs-target="#productos" aria-expanded="false" aria-controls="productos">
                        <i className="bi bi-box2"></i>
                        <span>productos</span>
                    </a>
                    <ul id="productos" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                        <li className="sidebar-item">
                            <Link to="/productos" className='sidebar-link'>
                                <i className="bi bi-list"></i> Todos
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link to="/productos/crear" className="sidebar-link"><i className="bi bi-plus-square"></i> Crear</Link>
                        </li>
                    </ul>
                </li>
            </ul>
            <div className="sidebar-footer">
                <a href="login.html" className="sidebar-link">
                    <i className="bi bi-box-arrow-left"></i>
                    <span>Logout</span>
                </a>
            </div>
        </nav>
    );
}
export default MenuSidebar;