import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import Navbar from "./common/navbar/Navbar";
import Footer from "./common/footer/Footer";
import ContactUsPage from "./pages/contactuspage/ContactUsPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import RollerChains from "./pages/rollerChains/RollerChains";
import LeafChains from "./pages/leafChains/LeafChains";
import BushChains from "./pages/bushChains/BushChains";
import ExtendedPitchChains from "./pages/extendedPitchChains/ExtendedPitchChains";
import AttachmentChains from "./pages/attachmentChains/AttachmentChains";
import AgricultureChains from "./pages/agricultureChains/AgricultureChains";
import ProductPage from "./pages/productPage/ProductPage";

function App() {
  return (
    <BrowserRouter basename="galaxychainfront">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/About" element={<AboutPage />}></Route>
        <Route path="/Contact" element={<ContactUsPage />}></Route>
        <Route path="/ProductPage" element={<ProductPage />}></Route>
        <Route path="/RollerChains" element={<RollerChains />}></Route>
        <Route path="/BushChains" element={<BushChains />}></Route>
        <Route
          path="/ExtendedPitchChains"
          element={<ExtendedPitchChains />}></Route>
        <Route path="/LeafChains" element={<LeafChains />}></Route>
        <Route path="/AttachmentChains" element={<AttachmentChains />}></Route>
        <Route
          path="/AgricultureChains"
          element={<AgricultureChains />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
