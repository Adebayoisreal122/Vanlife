import { useState } from 'react'
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import { Routes,Route, Navigate } from 'react-router-dom'
import './App.css';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Vandetails from './components/Vandetails';
import NotFound from './components/notFound';
import { ToastContainer,} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VanDescript from './components/VanDescript';
import Host from './components/host';
import HostVans from './components/HostVans';
import HostIncome from './components/HostIncome';
import HostReview from './components/HostReview';
import HostDash from './components/HostDash';

function App() {
  const [count, setCount] = useState(0)

  return (

    <>    
    <ToastContainer/>
   <Routes>
  <Route path="/" element={<Layout/>}>
    <Route path="/" element={<Home/>} />
    <Route path="*" element={<NotFound/>} />
    <Route path="/home" element={<Navigate to="/" />} />
    <Route path="/about" element={<About/>} />
    <Route path="/vans" element={<Vandetails/>}>
    </Route>
      <Route path="/vans/:id" element={<VanDescript/>} />





<Route path='/host' element={<Host/>}>
    <Route path='/host' element={<HostDash/>} />
    <Route path='/host/review' element={<HostReview/>} />
    <Route path='/host/income' element={<HostIncome/>} />
    <Route path='/host/van' element={<HostVans/>} />
</Route>
  </Route>

</Routes>

    </>
  )
}

export default App
