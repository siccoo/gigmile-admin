import Sidebar from "../../components/sidebar";
import Topbar from "../../components/topbar";
import Widgets from "../../components/activeWidgets";

import "./home.scss";
import DefWidgets from "../../components/defaultWidgets";
import GigWidgets from "../../components/gigWigets";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home__container">
        <Topbar />
        <div className="home__container__widgets">
          <Widgets />
          <div className="home__smallWidget">
            <DefWidgets />
            <GigWidgets />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;