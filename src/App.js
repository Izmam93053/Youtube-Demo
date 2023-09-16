import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Navbar/Navbar';
import Home from './HomePage/Home';
import Shorts from './components/Shorts/Shorts';
import Subscription from './components/Subscription/Subscription';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Navbar/>
     {/* <Home/> */}
     <Routes>
      <Route path='/'element={<Home/>} > </Route>
    
      <Route path='/shorts'element={<Shorts/>} > </Route>
      <Route path='/subscription'element={<Subscription/>} > </Route>
    
      {/* <Route path='/'element={<Home/>} > </Route> */}
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
