import Home from './pages/Home'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CollegeListing from './pages/CollegeListing'
import AboutPage from './pages/AboutPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SeminarList from './pages/SeminarList'
import SingleCollege from './pages/SingleCollege'
import ContactUs from './pages/ContactUs'

function App() {
  return (
    <>
      <Navbar/>
      <Router>
      <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/colleges' element = {<CollegeListing/>}/>
      <Route path='/about' element = {<AboutPage/>}/>
      <Route path='/seminars' element = {<SeminarList/>}/>
      <Route path='/college/:id' element = {<SingleCollege/>}/>
      <Route path='/contact' element = {<ContactUs/>}/>
      </Routes>
      </Router>
      <Footer/>
    </>
  )
}

export default App
