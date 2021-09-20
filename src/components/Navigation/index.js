import React from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft} from 'react-icons/md';
import { VscTriangleDown } from 'react-icons/vsc';
import './style.css';
import profil from '../../images/profil.png';

const index = () => {
  const iconStyle = {color: "white", fontSize: "1.5rem"}; 
  return (
    <div>
      <div className="nav__main">
        <div className="nav__main__prev-next">
          <button className="nav__main__prev-next-prev" > <MdKeyboardArrowLeft style={iconStyle} /> </button>
          <button className="nav__main__prev-next-next" > <MdKeyboardArrowRight style={iconStyle} /></button>
        </div>
        <div className="nav__main__buttons">
          <button className="nav__main__buttons__subscribe">s'abonner</button>
          <button className="nav__main__buttons__profil"> 
            <img src={profil} alt="profil"/>
            Lyam Rdb
            <span><VscTriangleDown /></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;