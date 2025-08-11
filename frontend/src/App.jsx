import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/navbar/navbar.jsx'
import Home from './components/home/home.jsx'
import About from './components/about/about.jsx';
import Contact from './components/contact/contact.jsx';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
const location = useLocation()

return (
<>
    <Navbar />

    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    {/* Add other routes here as you create more components */}
    </Routes>

    {/* Example: Show chat only on home and chat pages, if you have it */}

    {/* Footer appears on every page */}
    <Contact />
</>
)
}

export default App
