import './App.css';
import {Routes, Route, Navigate} from "react-router-dom"
import { Home } from './pages/Home';

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path={"/home"} element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
