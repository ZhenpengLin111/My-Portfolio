// App.js
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Movies from './Pages/Movies'; 
import Projects from './Pages/Projects';
import Circles from './Components/Circles';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Helmet component to manage head */}
        <Helmet>
          <meta charSet="utf-8" />
          <title>ZPL の 小窝</title>
          <link rel="icon" type="image/png" href="..public/favicon.png" sizes="16x16" />
        </Helmet>
        <div className="area" >
          <Circles />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path='/Movies' element={<Movies />} />
            <Route path='/Projects' element={<Projects />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
