import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Profile from './Profile';

function App() {
  return (
    <main className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
