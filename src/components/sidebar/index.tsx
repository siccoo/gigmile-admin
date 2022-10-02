import { AiOutlineSetting, AiOutlinePieChart } from "react-icons/ai";
import { GrHomeRounded } from "react-icons/gr";
import { FaUsers } from "react-icons/fa";
import { HiOutlineDocumentText, HiOutlineBriefcase } from "react-icons/hi";
import GigmileLogo from "../../assets/img/gigLogo.png"
import DashboardIcon from "../../assets/img/dashboard.svg";
import ImgIcon from "../../assets/img/imageIcon.png";

import "./sidebar.scss"

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar__top'>
                <img src={GigmileLogo} alt="" />
                <div className="sidebar__top__border">
                    <img src={ImgIcon} alt="" style={{ width: 30, height: 30, marginRight: 15 }} />
                    <div>
                        <p>Michael Essien</p>
                        <span>Administrator</span>
                    </div>
                </div>
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