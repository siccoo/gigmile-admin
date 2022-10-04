import "./widgets.scss";

import ActiveGraph from "../../assets/img/activeGraph.png";
import Users from "../../assets/img/users.png";

const ActiveWidgets = () => {
    return (
        <div className='widgets'>
            <div style={{ borderBottom: "0.5px solid rgb(231, 228, 228)" }}>
                <div className='widgets__top'>
                    <p className="one">
                        <img src={ActiveGraph} alt="" /> Active Captains
                    </p>
                    <div style={{ display: "flex", }}>
                        <p className="two">Gigmile Captains currently on service requests.</p>
                        <span>Last 30 days</span>
                    </div>

                </div>
            </div>
            <div className='widgets__bottom'>
                <div style={{display: "flex", marginTop: 10}}>
                    <img src={Users} alt="" />
                    <p>Overall: </p>
                    <span>2,643,890,786</span>
                </div>
            </div>
        </div>
    )
}

export default ActiveWidgets