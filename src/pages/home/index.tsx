import Sidebar from "../../components/sidebar";
import Topbar from "../../components/topbar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home__container">
        <Topbar />
        Content
      </div>
    </div>
  )
}

export default Home;