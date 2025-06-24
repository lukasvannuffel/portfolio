import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/Home'
import Footer from './sections/Footer'
import Navbar from './components/Navbar'
import Project1 from './sections/detail/Project1';
import Project2 from './sections/detail/Project2';
import Project3 from './sections/detail/Project3';

function App() {

  return (
    <div>
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/1" element={<Project1 />} />
          <Route path="/projects/2" element={<Project2 />} />
          <Route path="/projects/3" element={<Project3 />} />
        </Routes>
      <Footer />
    </Router>
    </div>
  )
}

export default App;
