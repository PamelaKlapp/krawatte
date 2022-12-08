import React from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Products from './components/Products/Products'
import Company from './components/Company/Company'
import DisplayProducts from './components/DisplayProducts/DisplayProducts'

const App = () => {
  return (
   <>
   <Navbar/>
   <Header/>
   <Products/>
   <DisplayProducts/>
   <Company/>
   </>

    
  )
}

export default App