import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/LoginPage/Login";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Categories from "./Components/Categories/Categories";
import Create from "./Components/Create/Create";
import Profile from "./Components/Profile/Profile";
import Talent from "./Components/Profile/Talent";
import UserState from "./Context/UserState";

function App() {
  return (
    <div style={{ position: "relative" }}>
      <Router>
        <UserState>
          <Navbar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/explore" element={<Categories />} />
            <Route path="/createtalent" element={<Create />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/talent" element={<Talent />} />
          </Routes>
          <Footer />
        </UserState>
      </Router>
    </div>
  );
}

export default App;
