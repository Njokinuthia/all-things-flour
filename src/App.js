import './App.css';
import Home from './pages/home/Home';
import About from './pages/home/about/About';
import Contact from './pages/home/Contact/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
