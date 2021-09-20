import React from 'react';
import Navigation from '../Navigation/'
import pochette from '../../images/poisonouantidote.jpeg'
import { VscCircleFilled } from 'react-icons/vsc';
import {FaPlay} from 'react-icons/fa';
import {IoIosHeartEmpty} from 'react-icons/io';
import {BsThreeDots, BsClock} from 'react-icons/bs';
import './style.css';

const index = () => {
  const iconStyle = {color: "white", fontSize: "1.5rem"};
  return (
    <div>
      <main>
        <div className="main__album">
          <Navigation />
          <div className="main__album__desc">
            <img className="main__album__desc__picture" src={pochette} alt="pochette d'album" />
            <div className="main__album__desc__content">
              <span>Album</span>
              <h1>Poison ou Antidote (Miel Book Edition)</h1>
              <div className="main__album__desc__content__precision">
                <div className="main__album__desc__content__precision__artiste">
                  <img className="main__album__desc__content__precision__artiste__img" src={pochette} alt="artiste" />
                  <h2 className="main__album__desc__content__precision__artiste__author">
                    <a href="#">
                      Dadju
                    </a>
                  </h2> 
                </div> 
                <span> <VscCircleFilled size={8} /></span>
                <p>2021</p> 
                <span> <VscCircleFilled size={8} /></span>
                <p>44 titres, 2 h 40 min</p>
              </div>
            </div>
          </div>
        </div>
        <div className="main__tracks">
          <div className="main__tracks__option">
            <div className="main__tracks__option__play">
            <button><FaPlay style={iconStyle}/></button>
            <span><IoIosHeartEmpty color="#CCC" fontSize="2rem"/></span>
            <span><BsThreeDots color="#CCC" fontSize="2rem"/></span>
            </div>
          </div>
          <div className="main__tracks__list">
            <div className="main__tracks__list__title">
              <div className="main__tracks__list__title__left">
                <p>#</p>
                <p>titre</p>
              </div>
              <div className="main__tracks__list__title__rigth">
                <span><BsClock fontSize={15}/></span>
              </div>
            </div>
            <div className="main__tracks__list__playlist">
              <div className="main__tracks__list__playlist__left">
                <p>1</p>
                <div className="main__tracks__list__playlist__left__song">
                <p>Mon Soleil</p>
                <p><a href="">Dadju</a> , <a href="">Anitta</a></p>
                </div>
              </div>
              <div className="main__tracks__list__playlist__rigth">
              <span><IoIosHeartEmpty color="#CCC" fontSize="1rem"/></span>
                <p>3:1O</p>
                <em><BsThreeDots color="#CCC" fontSize="1rem"/></em>
              </div>
            </div>
            <div className="main__tracks__list__playlist">
              <div className="main__tracks__list__playlist__left">
                <p>1</p>
                <div className="main__tracks__list__playlist__left__song">
                <p>Mon Soleil</p>
                <p><a href="">Dadju</a> , <a href="">Anitta</a></p>
                </div>
              </div>
              <div className="main__tracks__list__playlist__rigth">
              <span><IoIosHeartEmpty color="#CCC" fontSize="1rem"/></span>
                <p>3:1O</p>
                <em><BsThreeDots color="#CCC" fontSize="1rem"/></em>
              </div>
            </div>
            <div className="main__tracks__list__playlist">
              <div className="main__tracks__list__playlist__left">
                <p>1</p>
                <div className="main__tracks__list__playlist__left__song">
                <p>Mon Soleil</p>
                <p><a href="">Dadju</a> , <a href="">Anitta</a></p>
                </div>
              </div>
              <div className="main__tracks__list__playlist__rigth">
              <span><IoIosHeartEmpty color="#CCC" fontSize="1rem"/></span>
                <p>3:1O</p>
                <em><BsThreeDots color="#CCC" fontSize="1rem"/></em>
              </div>
            </div>
            <div className="main__tracks__list__playlist">
              <div className="main__tracks__list__playlist__left">
                <p>1</p>
                <div className="main__tracks__list__playlist__left__song">
                <p>Mon Soleil</p>
                <p><a href="">Dadju</a> , <a href="">Anitta</a></p>
                </div>
              </div>
              <div className="main__tracks__list__playlist__rigth">
                <span><IoIosHeartEmpty color="#CCC" fontSize="1rem"/></span>
                <p>3:1O</p>
                <em><BsThreeDots color="#CCC" fontSize="1rem"/></em>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default index;