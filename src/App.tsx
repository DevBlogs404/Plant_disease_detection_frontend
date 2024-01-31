import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import DiseaseDetection from "./pages/DiseaseDetection";

function App() {
  return (
    <BrowserRouter>
      <main className=" bg-gradient-to-r  from-rose-100 to-teal-100 max-w-7xl mx-auto min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/disease-detection" element={<DiseaseDetection />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
