import Sidebar from "../../components/sidebar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home__container">
        Content
      </div>
    </div>
  )
}

export default Home;