
import './App.css';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import CartoonComponent from './Component/Routes/CartoonComponent/CartoonComponent';
import ProtfolioComponent from './Component/Routes/PortfolioComponent/PortfolioComponent';
import CalculatorComponent from './Component/Routes/CalculatorComponent/CalculatorComponent';
import Home from './Component/Routes/home/Home';
import About from './Component/Routes/about/About';
import Contact from './Component/Routes/contact/Contact';
import User from './Component/Routes/user/User';
import Service from './Component/Routes/service/Service';
import ServiceList from './Component/Routes/service/ServiceList';
import { useEffect, useState } from 'react';
import  Axios  from 'axios';
function App() {
  const [value,SetValue]=useState([])
  useEffect(()=>{
    Axios.get('http://localhost:3500/service')
    .then((res)=>{
      SetValue(res.data)
    })
  })
  return (
    <Router>
      <div className="App">
          <ul>
          <li>
            <Link to='/' className='link'>Portfolio</Link>
          </li>
          <li>
            <Link to='/Calculator' className='link'>Calculator</Link>
          </li>
          <li>
            <Link to='/Cartoon' className='link'>Cartoon</Link>
          </li>
          <li>
            <Link to='/home' className='link'>Home</Link>
          </li>
          <li>
            <Link to='/about' className='link'>About</Link>
          </li>
          <li>
            <Link to='/contact' className='link'>Contact</Link>
          </li>
          <li>
            <Link to='/user' className='link'>User</Link>
          </li>
          <li>
            <Link to='/service' className='link'>Service</Link>
          </li>
       </ul>
      </div>
    
    <Routes>
        <Route exact path='/'element={<ProtfolioComponent/>}></Route>
        <Route exact path='/Calculator'element={<CalculatorComponent/>}></Route>
        <Route exact path='/Cartoon'element={<CartoonComponent/>}></Route>
        <Route exact path='/home' element={<Home/>}></Route>
        <Route exact path='/about' element={<About/>}></Route>
        <Route exact path='/contact' element={<Contact/>}></Route>
        <Route exact path='/user' element={<User/>}></Route>
        <Route exact path='/service' element={<Service/>}></Route>
        <Route exact path={`/service/${value.length}`} element={<ServiceList LengthArray= {value.length}/>}></Route>
    </Routes>
   </Router>
    
  );
}

export default App;
