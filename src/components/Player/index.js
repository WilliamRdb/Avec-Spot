import React from 'react';
import './style.css';
import {IoIosHeartEmpty} from 'react-icons/io';
import pochette from '../../images/poisonouantidote.jpeg'

const index = () => {
  return (
    <div>
      <div className="player__container">
        <div className="player__container__left">
          <img className="player__container__left__img" src={pochette} alt="pochette album" />
          <div className="player__container__left__song">
            <a href="">Mon Soleil</a>
            <div className="player__container__left__song__artist">
              <a href="">Dadju</a>,
              <a href="">Anitta</a>
            </div>
          </div>
          <span className="player__container__left__song__like">
            <IoIosHeartEmpty color="#CCC"/>
          </span>
          <span className="player__container__left__song__vue">
            <IoIosHeartEmpty color="#CCC"/>
          </span>
        </div>
        <div className="player__container__middle"></div>
        <div className="player__container__right"></div>
      </div>
    </div>
  );
};

export default index;