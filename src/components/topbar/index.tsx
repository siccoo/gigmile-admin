import "./topbar.scss";

import BellIcon from "../../assets/img/bellIcon.png";
import NoteIcon from "../../assets/img/noteIcon.png";
import ImgIcon from "../../assets/img/imageIcon.png";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar__wrapper">
        <p>Hello Michael! 👋🏽</p>
        <div className="topbar__items">
          <div className="item">
            <div className="search">
              <input type="text" placeholder="Search" />
            </div>
          </div>
          <div className="item">
            <img src={NoteIcon} alt="" style={{width: 15, height: 15}} />
          </div>
          <div className="item">
            <img src={BellIcon} alt="" style={{width: 15, height: 15}}  />
          </div>
          <div className="item">
            <img src={ImgIcon} alt="" style={{width: 30, height: 30}}  />
            <select name="" id=""></select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar