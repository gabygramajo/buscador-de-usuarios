import React from 'react';
import './Nav.css';

const Nav = ({validSearchUser}) => {
    return (
        <nav className="App-nav">
            <h2>Amigos</h2>
            <div className="search-section">
                <img src="img/search.svg" alt="search img"/>
                <input type="search" placeholder="Buscar" onChange={validSearchUser}/>
            </div>
        </nav>
    );
}

export default Nav;