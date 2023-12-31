import { Route, Routes } from 'react-router-dom';
import NavBar from './components/header/Navbar';
import Home from './pages/home/Home';
import Lessons from './pages/lessons/Lessons';
import Contact from './pages/contact/Contact';
import WhatIsTypeScript from './pages/lessons/typescript/Typescript1';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/lessons/1" element={<WhatIsTypeScript />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
