import './App.css';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
//pages
import Landing from "././screen/Landing";
import Register from "././screen/Register";
import NotFound from '././screen/NotFound';
import DashBoard from '././screen/DashBoard';

<style>
  .b{
    "background-color: #4CAF50;border: none;color: white;font-size: 1rem"
  }
</style>

function App() {
  return (
    <div className="App">
      <h1>Jobify</h1>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
          <Link to="/landing">DashBoard</Link>
        </nav>
        <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<DashBoard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
