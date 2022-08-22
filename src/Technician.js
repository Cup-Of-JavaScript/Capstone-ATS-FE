import { React, useState, useEffect} from "react";
import axios from 'axios'
import './Technician.css'

const Technician = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [otherSelectedOptions, setOtherSelectedOptions] = useState([])

    useEffect(() => {
        const fetch = async () => {
            let r = await axios.get(`http://localhost:5150/Technician`)
            setSelectedOptions(r.data)
        }
        fetch()
    }, [])

    useEffect(() => {
        const fetch = async () => {
            let r = await axios.get(`http://localhost:5150/category`)
            setOtherSelectedOptions(r.data)
        }
        fetch()
    }, [])

    return (
        <div className="Technician">
            <div>Technician Name:</div>
            <select>
                <option value="">Select Name</option>
                {selectedOptions.map((s) => (
                    <option key={s.tech_id} value={s.tech_id}>
                        {s.tech_name}
                    </option>
                ))}
            </select>
            <div>
                <div>Issue</div>
                <select>
                    <option value="">Select Issue</option>
                    {otherSelectedOptions.map((s) => (
                        <option key={s.category_id} value={s.category_id}>
                            {s.category_name}
                        </option>
                    ))}
                </select>
            </div >
            <div className="accept-container">
                <button className="accept-btn">Accept</button>
            </div>
        </div>
    )
}
export default Technician;