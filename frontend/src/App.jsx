import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar.jsx';
import Home from './components/home/home.jsx';
import About from './components/about/about.jsx';
import Contact from './components/contact/contact.jsx';
import Products from "./components/products/products.jsx";
import Hours from "./components/hours/hours.jsx";
import Menu from "./components/menu/menu.jsx";


import ScrollToTop from "./components/ScrollToTop.jsx";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
return (
    <>
    <ScrollToTop /> {/* Must be here, outside Routes */}
    <Navbar />

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/hours" element={<Hours />} />
        <Route path="/menu" element={<Menu />} />

        {/* Add other routes here */}
    </Routes>

    {/* Footer appears on every page */}
    <Contact />
    </>
);
}

export default App;
