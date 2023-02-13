import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
