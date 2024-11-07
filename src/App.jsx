// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SubscribeForm from './components/SubscribeForm';
import Verify from './pages/Verify';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SubscribeForm />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>
    </Router>
  );
}

export default App;
