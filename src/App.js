import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/LoginPage/Login";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Categories from "./Components/Categories/Categories";
import Create from "./Components/Create/Create";
import Profile from "./Components/Profile/Profile";
import UserData from "./Context/UserData";

function App() {
  return (
    <div style={{position:"relative"}}>
      <Router>
        <div className="routes">
        <UserData>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/create" element={<Create />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        </UserData>
        </div>
        <div className="footer" style={{
          position:"absolute",
          width:"100%",
          bottom:"0%",
          // marginTop:"230px"
          // margin:"10px"
        }}>
            <Footer/>
        </div>
      </Router>
    </div>
  );
}

export default App;
