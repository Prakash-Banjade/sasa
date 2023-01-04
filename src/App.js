import "./MediaQueries.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./components/routes/HomePage";
import AboutUsPage from "./components/routes/AboutUsPage";
import { useEffect } from "react";
import LatestPosts from "./components/routes/LatestPosts";
import AlertMessage from "./components/Alert";
import Contact from "./components/routes/Contact";
import DrivingLicense from "./components/services/DrivingLicense";
import ServicesPage from "./components/routes/ServicesPage";
import Passport from "./components/services/Passport";
import TuitionClasses from "./components/services/TuitionClasses";
import OnlineFormSubmission from "./components/services/OnlineFormSubmission";
import ComputerClasses from "./components/services/ComputerClasses";
import ShareMarket from "./components/services/ShareMarket";
import Webdesigning from "./components/services/Webdesigning";
import NotFound from "./components/NotFound";




function App() {
  let currLocation = useLocation();

  useEffect(() => {
    document.querySelector(".nav__links").classList.remove("active");
    document.getElementById("bar").classList.remove("toggled");
    window.scrollTo(0, 0);
  }, [currLocation]);

  return (
    <>
      <AlertMessage />
      <Navbar />

      <Routes>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutUsPage />} />
        <Route path="latestposts" element={<LatestPosts />} />

        <Route path="services">
          <Route index element={<ServicesPage />} />
          <Route path="drivinglicense" element={<DrivingLicense />} />
          <Route path="passport" element={<Passport />} />
          <Route path="tuitionclasses" element={<TuitionClasses />} />
          <Route path="onlineforms" element={<OnlineFormSubmission />} />
          <Route path="sharemarket" element={<ShareMarket />} />
          <Route path="webdesigning" element={<Webdesigning />} />
          <Route path="computerclasses" element={<ComputerClasses />} />
        </Route>
        
        <Route end path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
