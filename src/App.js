import './MediaQueries.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import {Routes, Route, useLocation} from 'react-router-dom'
import HomePage from './components/routes/HomePage';
import AboutUsPage from './components/routes/AboutUsPage';
import { useEffect } from 'react';
import LatestPosts from './components/routes/LatestPosts';
import AlertMessage from './components/Alert';
import Contact from './components/Contact';


function App() {
  let currLocation = useLocation()

  useEffect(() => {
    document.querySelector(".nav__links").classList.remove("active");
    document.getElementById("bar").classList.remove("toggled");
    window.scrollTo(0,0);
  }, [currLocation])

  return (
    <>
    <AlertMessage />
      <Navbar />

      <Routes>
        <Route end path="/" element={<HomePage />} />
        <Route end path="/about" element={<AboutUsPage />} />
        <Route end path="/latestposts" element={<LatestPosts />} />
        <Route end path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
