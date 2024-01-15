// App.js
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from './Components/navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Movies from './Pages/Movies'; 
import Projects from './Pages/Projects';
import MessageBoard from './Pages/Message';

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
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path='/Movies' element={<Movies />} />
            <Route path='/Projects' element={<Projects />} />
            <Route path='/Message_board' element={<MessageBoard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
