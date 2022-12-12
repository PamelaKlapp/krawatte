import React from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Products from './components/Products/Products'
import Company from './components/Company/Company'
import FAQs from './components/FAQs/FAQs'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
   <>
   <Navbar/>
   <Header/>
   <Products/>
   <Company/>
   <FAQs/>
   <Footer/>
   </>

    
  )
}

export default App