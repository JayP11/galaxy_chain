import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import Navbar from "./common/navbar/Navbar";
import Footer from "./common/footer/Footer";
import ContactUsPage from "./pages/contactuspage/ContactUsPage";
import AboutPage from "./pages/aboutPage/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/About" element={<AboutPage />}></Route>
        <Route path="/Contact" element={<ContactUsPage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
