import {AiOutlineSetting, AiOutlinePieChart} from "react-icons/ai";
import {GrHomeRounded} from "react-icons/gr";
import {FaUsers} from "react-icons/fa";
import {HiOutlineDocumentText, HiOutlineBriefcase} from "react-icons/hi";
import GigmileLogo from "../../assets/img/gigLogo.png"
import DashboardIcon from "../../assets/img/dashboard.svg";

import "./sidebar.scss"

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebar__top'>
<img src={GigmileLogo} alt="" />
        </div>
        <div className='sidebar__center'>
            <ul>
                <li>
                    <span>
                        <img src={DashboardIcon} alt="" />
                    </span>
                    Dashboard
                </li>
            </ul>
        </div>
        <div className='sidebar__bottom'></div>
    </div>
  )
}

export default Sidebar