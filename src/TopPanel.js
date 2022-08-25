import { React } from "react";
import { Outlet, Link } from 'react-router-dom'
import './TopPanel.css'

const Layout = () => {

  return (
    <>
      <div className="links">
        <Link to={`/`}><button className="customer-button">Customer</button></Link>
        <Link to={`/technician`}><button className="tech-button">Technician</button></Link>
        <Link to={`/billing`}><button className="billing-button">Billing Report</button></Link>
        <Outlet />
      </div>
    </>
  )
};

export default Layout;