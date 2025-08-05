import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Products from "./components/pages/Products";
import Contact from "./components/pages/Contact";
import Card from "./components/pages/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import Feature from "./components/Feature";
const App = () => {
  const [location, setLocation] = useState();

  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;
      console.log("Lat:", latitude, "Lng:", longitude);
      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;
      try {
        const locationRes = await axios.get(url);
        const exactLocation = locationRes.data.address;
        setLocation(exactLocation);
        // console.log("Location:", exactLocation);
      } catch (error) {
        // console.log("Location fetch error:", error);
      }
    });
  };

  // ✅ এইখানে useEffect থাকবে
  useEffect(() => {
    getLocation();
  }, []);

  return (
    <BrowserRouter>
      <Navbar location={location} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/card" element={<Card />} />
      </Routes>
      <Feature/>
    </BrowserRouter>
  );
};

export default App;
