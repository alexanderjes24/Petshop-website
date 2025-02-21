import './App.css'
import { BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import Home from './Home'
import Shop from './Shop'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'

const App = () => {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/shop" element={<Shop/>} />
      <Route path="/about-us" element={<AboutUs/>} />
      <Route path="/contact-us" element={<ContactUs/>} />
      </Routes>
    </Router>
  )
}

export default App