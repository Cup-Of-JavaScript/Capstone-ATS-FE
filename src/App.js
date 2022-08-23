import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Customer from './Customer'
import Technician from './Technician';
import TopPanel from './TopPanel'
import { BillingReport } from './BillingReport';
import './App.css';

function App() {
  return (
    <div className='header'>
      <h1>Apartment Ticketing System</h1>
      <div className='main'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TopPanel />}>
            <Route index element={<Customer />} />
            <Route path="technician" element={<Technician />} />
            <Route path="billing" element={<BillingReport />} /> 
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div >
  )
}
export default App;