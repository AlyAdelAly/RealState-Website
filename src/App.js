import { Route, Routes } from 'react-router-dom';

import Navbar from './components/navbar';
import Home from './pages/home';
import Footer from './components/footer';
import About from './pages/about';
import Contact from './pages/contact';
import PropertyDetails from './components/propertyDetails';

const App = () => {
  return (
    <div className="w-full mx-auto bg-white">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path=':id' element={<PropertyDetails />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
