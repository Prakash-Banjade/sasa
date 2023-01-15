import "./MediaQueries.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./components/routes/HomePage";
import AboutUsPage from "./components/routes/AboutUsPage";
import { useContext, useEffect } from "react";
import LatestPosts from "./components/routes/LatestPosts";
// import AlertMessage from "./components/Alert";
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
import Company from "./components/routes/Company";
import { ThemeContext } from "./context/context";

function App() {
  const { dark } = useContext(ThemeContext);
  let currLocation = useLocation();

  useEffect(() => {
    let paragraph = document.getElementsByTagName("p");
    let constantPara = [
      "customer-name",
      "hero-content",
      "message",
      "feature-desc",
    ];
    Array.from(paragraph).forEach((p) => {
      if (constantPara.some((className) => p.classList.contains(className)))
        return;
      p.classList.add(dark ? "dark" : "light");
      p.classList.remove(dark ? "light" : "dark");
    });

    let bigHeadings = Array.from(
      document.getElementsByClassName("big-heading")
    );
    let headings = Array.from(document.getElementsByTagName("h3"));
    let headingArray = [...bigHeadings, ...headings];
    headingArray.forEach((heading) => {
      if (heading.classList.contains("logo-text")) return;
      heading.classList.add(dark ? "dark" : "light");
      heading.classList.remove(dark ? "light" : "dark");
    });
    document.getElementById("bar").classList.remove("toggled");
  }, [dark, currLocation]);

  useEffect(() => {
    document.querySelector(".nav__links").classList.remove("active");
    window.scrollTo(0, 0);
  }, [currLocation]);

  document.getElementById("root").style.backgroundColor = dark
    ? "var(--primary-dark)"
    : "white";

  return (
    <>
      {/* <AlertMessage /> */}
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

        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
