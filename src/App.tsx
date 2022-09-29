import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home";
import List from "./pages/list";
import New from "./pages/new";
import Single from "./pages/single";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users">
          <Route index element={<List />} />
          <Route path=":usersId" element={<Single />} />
          <Route path="new" element={<New />} />
        </Route>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
