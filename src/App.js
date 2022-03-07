import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Tabs from './components/Tabs';
import Clanding from './pages/Clanding';







function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path='/' element={<Register />} /> 
            <Route path='/login' element={<Login />}/> 
            <Route path='/customer' element={<Clanding />}/> 
            <Route path='/tab' element={<Tabs />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;


