import "./sidebar.scss";

import GigmileLogo from "../../assets/img/gigLogo.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <span>
          <img src={GigmileLogo} alt="" />
        </span>
      </div>
      <div className="sidebar__center">list</div>
      <div className="sidebar__bottom">logout list</div>
    </div>
  )
}

export default Sidebar