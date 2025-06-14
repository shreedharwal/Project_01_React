import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Footer from './components/Footer.jsx'
import Contact from './components/Contact.jsx'
import Features from './components/Features.jsx'


import './App.css'

function App() {

  return (
    <div className="text-white ">
      <Navbar />
      <Hero />
      <Features/>
      <Contact/>
      <Footer/> 
    </div>
  )
}

export default App
