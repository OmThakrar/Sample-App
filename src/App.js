import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Login from './pages/login/Login';
import Mssg from './components/Mssg';
import Home from './pages/home/Home';
import SignUp from './pages/login/SignUp';
import Rating from './pages/Profile/Rating';
import Profile from './pages/Profile/Profile';
import Profileform from "./components/Profileform";
import Messaging from './components/Messaging';
import Footer from './components/Footer';
import Contact from './components/ContactUs';
import Slide from './slider/App'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/messaging" element={<Mssg />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/rating" element={<Rating />}></Route>
          <Route exact path="/profile" element={<Profile />}></Route>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/signup" element={<SignUp />}></Route>
          <Route exact path="/rating" element={<Rating />}></Route>
          <Route exact path="/profileform" element={<Profileform />}></Route>
          <Route exact path="/recommendation" element={<Slide />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
        <Messaging />
      </BrowserRouter>
    </div>
  );
}

export default App;
