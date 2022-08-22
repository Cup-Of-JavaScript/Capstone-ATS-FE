import { React} from "react";
import "./BillingReport.css";
  

const data = [
  { customer :"Mary",  Technician: "Alice", Issue: "Paint", Urgency: "Normal", Cost: "$100.00" },
  { customer: "Fred", Technician: "Bob" , Issue: "Plumbing", Urgency:"Normal", Cost: "$100.00"},
  { customer: "Paul", Technician: "Charlie", Issue: "Electrical", Urgency: "Normal", Cost: "100.00" },
  { customer: "Sue", Technician: "Alice", Issue: "Paint", Urgency: "High", Cost:"150.00" }

]
  
function BillingReport () {
  return (
    <div className="App">
      <table>
        <tr>
          <th>Customer:</th>
          <th>Technician:</th>
          <th>Issue:</th>
          <th>Urgency:</th>
          <th>Cost:</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.customer}</td>
              <td>{val.Technician}</td>
              <td>{val.Issue}</td>
              <td>{val.Urgency}</td>
              <td>{val.Cost}</td>
            </tr>
          )
        })}
      </table>
    </div>
  );
}
  
export default BillingReport;
