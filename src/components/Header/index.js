import React from 'react';
import { VscHome, VscLibrary } from 'react-icons/vsc';
import { IoIosSearch } from 'react-icons/io'
import { AiFillHeart } from 'react-icons/ai';

import logo from '../../images/Spotify_Logo_White.png';
import './style.css'

const index = () => {
  return (
    <div>
      <header>
        <div className="header__up">
          <div className="logo">
            <img className="logo__item" src={logo} alt="logo spotify" />
          </div>
          <div className="navBar">
            <ul className="navBar__list">
              <li className="navBar__list__item"><span><VscHome size={30} /></span> Accueil</li>
              <li className="navBar__list__item"><span><IoIosSearch size={30} /></span>Recherche</li>
              <li className="navBar__list__item"><span><VscLibrary size={30} /></span>Bibliotèque</li>
            </ul>
          </div>
          <div className="button">
            <ul className="button__list">
              <li className="button__list__item"><div className="add"> +</div> Créer une playlist</li>
              <li className="button__list__item"><div className="like"><AiFillHeart size={20}/> </div> Titres likés</li>
            </ul>
          </div>
        </div>
        <div className="header__down">
          <ul className="playlist">
            <li className="playlist__item">Daily Mix 1</li>
            <li className="playlist__item">Daily Mix 2</li>
            <li className="playlist__item">Daily Mix 3</li>
            <li className="playlist__item">Tehno</li>
            <li className="playlist__item">Rap US</li>
            <li className="playlist__item">Hard Rock</li>
            <li className="playlist__item">Salsa</li>
            <li className="playlist__item">Zumba</li>
            <li className="playlist__item">Meringue</li>
            <li className="playlist__item">Hit Fr</li>
            <li className="playlist__item">Hit US</li>
            <li className="playlist__item">Mes titres Shazam</li>
            <li className="playlist__item">En ce moment</li>
            <li className="playlist__item">Ma playlist</li>
            <li className="playlist__item">Et oui</li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default index;