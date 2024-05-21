import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Shop from './pages/Shop';

function App() {
  return (
    <>

    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage/>}/>
        <Route path="/shop" element={<Shop/>} />
      </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
