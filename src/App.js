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
import FooterDown from "./common/footerDown/FooterDown";
import ChartDemo from "./pages/chartDemo/ChartDemo";
import Single_simplex_roller_british from "./pages/charts/single_simplex_roller_british/Single_simplex_roller_british";
import Double_duplex_roller_british from "./pages/charts/double_duplex_roller_british/Double_duplex_roller_british";
import Triple_triplex_roller_british from "./pages/charts/triple_triplex_roller_british/Triple_triplex_roller_british";
import Single_simplex_roller_american from "./pages/charts/single_simplex_roller_american/Single_simplex_roller_american";
import Double_duplex_roller_american from "./pages/charts/double_duplex_roller_american/Double_duplex_roller_american";
import Triple_triplex_roller_american from "./pages/charts/triple_triplex_roller_american/Triple_triplex_roller_american";
import Single_bush_british from "./pages/charts/single_bush_british/Single_bush_british";
import Extended_pitch_chains from "./pages/charts/extended_pitch_chains/Extended_pitch_chains";
import Agriculture_feeder_chain from "./pages/charts/agriculture_feeder_chain/Agriculture_feeder_chain";
import Agriculture_elevator_chain from "./pages/charts/agriculture_elevator_chain/Agriculture_elevator_chain";

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
        <Route path="/ChartDemo" element={<ChartDemo />}></Route>

        {/*  */}
        <Route
          path="/Single_simplex_roller_british"
          element={<Single_simplex_roller_british />}></Route>
        <Route
          path="/Double_duplex_roller_british"
          element={<Double_duplex_roller_british />}></Route>
        <Route
          path="/Triple_triplex_roller_british"
          element={<Triple_triplex_roller_british />}></Route>
        <Route
          path="/Single_simplex_roller_american"
          element={<Single_simplex_roller_american />}></Route>
        <Route
          path="/Double_duplex_roller_american"
          element={<Double_duplex_roller_american />}></Route>
        <Route
          path="/Triple_triplex_roller_american"
          element={<Triple_triplex_roller_american />}></Route>
        <Route
          path="/Single_bush_british"
          element={<Single_bush_british />}></Route>
        <Route
          path="/Extended_pitch_chains"
          element={<Extended_pitch_chains />}></Route>
        <Route
          path="/Agriculture_feeder_chain"
          element={<Agriculture_feeder_chain />}></Route>
        <Route
          path="/Agriculture_elevator_chain"
          element={<Agriculture_elevator_chain />}></Route>

        {/*  */}
      </Routes>
      <Footer />
      <FooterDown />
    </BrowserRouter>
  );
}

export default App;
