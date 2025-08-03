import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/navbar/navbar.jsx'
import Home from './components/home/home.jsx'

function App() {
  const location = useLocation()

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add other routes here as you create more components */}
      </Routes>

      {/* Example: Show chat only on home and chat pages, if you have it */}

      {/* Show contact if you create that component */}
    </>
  )
}

export default App
