import {useState} from 'react'
import axios from 'axios'
import './BillingReport.css'

export const BillingReport = () => {
  let [bill, setBill] = useState([])
    
  const clickHandler = async () => {
    let result = await axios.get(`http://localhost:5150/BillingReport/`)
    setBill(result.data)

}

return (
    <div>
        <button onClick={() => clickHandler()}>Generate</button>
        <table>
            <tbody>
                {bill.map(bill => (
                    <tr key={bill.id}>
                        <td>Customer: {bill.customer_name} </td>
                        <td>Technician: {bill.tech_name} </td>
                        <td>Issue: {bill.category_name} </td>
                        <td>Urgency: {bill.urgency_name} </td>
                        <td>Cost: {bill.total_cost} </td>
                    </tr>
                ))}
            </tbody>
        </table>



    </div>

)
}