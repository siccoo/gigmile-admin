import Sidebar from "../../components/sidebar";
import Topbar from "../../components/topbar";
import Widgets from "../../components/widgets";

import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home__container">
        <Topbar />
        <div className="home__container__widgets">
          <Widgets />
          <div className="home__smallWidget">
            <Widgets />
            <Widgets />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;