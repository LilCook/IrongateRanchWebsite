import Header from './Header';
import Home from './Home';
import React, { useEffect } from 'react';
import Title from './ImageTitle';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import BookWedding from './bookawedding.js';
import FAQs from './faqs.js';
import AboutUs from './aboutus';



function App() {
  useEffect(() => {
    document.title = "Bassett Wedding Venue";
  }, []);


  const Layout = () => {
    return (
      <>
      <Header />
      <Title />
      <Outlet />
      </>
    )
  }
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route path="home" element={<Home />} />
              <Route path="book-a-wedding" element={<BookWedding />} />
              <Route path="faqs" element={<FAQs />} />
              <Route path="about-us" element={<AboutUs />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </>
  );
}


export default App;
