import React from 'react';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import Company from './components/Company/Company';
import FAQs from './components/FAQs/FAQs';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Home />
        <Products />
        <Company />
        <FAQs />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
