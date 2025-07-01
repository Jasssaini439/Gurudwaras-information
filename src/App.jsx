import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Gurudwaras from './Pages/Gurudwaras'
import HomePage from './Pages/HomePage'
import History from './Pages/History';
import About from './Pages/About';
import Contact from './Pages/Contact';
import DarkModeToggle from './Components/DarkModeToggle';
import DonateForm from './Pages/DonateForm';
import ScrollToTop from './Components/ ScrollToTop';

function App() {
  

  return (
    <>
    <div className='bg-white dark:bg-black text-black dark:text-white'>
   <Router>
    <ScrollToTop/>
     <Navbar/>
      <DarkModeToggle/>
       <Routes>
         <Route path='/' element={<HomePage/>} />
         <Route path='/Gurudwaras' element={<Gurudwaras/>} />
         <Route path='/history' element={<History/>} /> 
         <Route path='/about' element={<About />} />
         <Route path='/contact' element={<Contact />} />
            <Route path='/donate' element={<DonateForm />} />
       
       </Routes>
     <Footer/> 
   </Router>
   </div>
    </>
  )
}

export default App
