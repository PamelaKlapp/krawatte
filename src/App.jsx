import React from 'react';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import Company from './components/Company/Company';
import FAQs from './components/FAQs/FAQs';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Holi from './components/holi'


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
        <Contact/>
      </main>
      <footer>
        <Holi/>
        <Footer />
      </footer>
    </>
  );
};

export default App;
