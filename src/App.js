import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

import AboutPage from './pages/AboutPage';
import DiscoverPage from './pages/DiscoverPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Navbar />

      <h1>Pika Pika!</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/discover" element={<DiscoverPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
