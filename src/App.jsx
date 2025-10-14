import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./pages/Intro";
import Main from "./pages/Main";
import SystemBefore from "./pages/SystemBefore";
import DesignGuide from "./pages/DesignGuide";
import Tablet from "./pages/Tablet";
import SmartWatch from "./pages/SmartWatch";
import Kiosk from "./pages/Kiosk";
import OKe from "./pages/OKe";
import "./styles/global.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/main" element={<Main />} />
        <Route path="/system-before" element={<SystemBefore />} />
        <Route path="/design-guide" element={<DesignGuide />} />
        <Route path="/tablet" element={<Tablet />} />
        <Route path="/smart-watch" element={<SmartWatch />} />
        <Route path="/kiosk" element={<Kiosk />} />
        <Route path="/ok-e" element={<OKe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
