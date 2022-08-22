import React, { useState, useEffect } from 'react'
import './BillingReport.css'
import axios from 'axios'


export const BillingReport = () => {
  let [billing, setBilling] = useState([])

  // const renderReport = async () => {
  //   let result = await axios.get(`http://localhost:5150/BillingReport`)
  //   setBilling(result.data)

  // }


  useEffect(() => {
    const fetch = async () => {
      let result = await axios.get(`http://localhost:5150/BillingReport`)
      setBilling(result.data)
    }
    fetch()
    // console.log("New Customer!")
  },[])


return (

  <div>
    <table>
      <tbody className='BillingReport'>
        <tr><th>Customer Name</th>
        <th>Technician</th>
        <th>Issue</th>
        <th>Urgency</th>
        <th>Cost</th>
        </tr>
        {billing.map(b => (
          <tr key={b.customer_name}>
            <td>{b.customer_name} </td>
            <td>{b.tech_name} </td>
            <td>{b.category_name} </td>
            <td>{b.urgency_name} </td>
            <td>{b.cost} </td>
          </tr>
        ))}
      </tbody>
    </table>



  </div>
)
}
