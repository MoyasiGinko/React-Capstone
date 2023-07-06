import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';

const NavBar = () => {
  const [isOverlayOpen, setOverlayOpen] = useState(false);

  const toggleOverlay = () => {
    setOverlayOpen(!isOverlayOpen);
  };

  return (
    <header className="header">
      <nav className={`navBar ${isOverlayOpen ? 'open' : ''}`}>
        <NavLink to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/genres" activeClassName="active">
          Genre
        </NavLink>
        <NavLink to="/anime" activeClassName="active">
          Animes
        </NavLink>
        <NavLink to="/search" activeClassName="active">
          Search
        </NavLink>
        <div className="line" />
        <NavLink to="/profile" activeClassName="active">
          MyProfile
        </NavLink>
      </nav>
      <div className="container">
        <div className="nav-left">
          <NavLink to="/">
            <BsChevronLeft />
          </NavLink>
        </div>
        <div className="nav-right">
          <button type="button" className="menu-toggle" onClick={toggleOverlay}>
            {isOverlayOpen ? 'Cancel' : 'Menu'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
