import {React, useState, useEffect} from "react";
import axios from "axios";
import './Technician.css'

const Technician = () => {
    const [selectedOptions, setSelectedOptions] = useState("");
    const [otherSelectedOptions, setOtherSelectedOptions] = useState("")

    useEffect(() => {
        const fetch = async () => {
            let r = await axios.get(`http://localhost:5150/technician`)
            setSelectedOptions(r.data)
        }
        fetch()
    }, [])

    // const people = [
    //     { value: "Alice", label: "Alice" },
    //     { value: "Bob", label: "Bob" },
    //     { value: "Charlie", label: "Charlie" },
    // ];

    // const problems = [
    //     { value: "Paint", label: "Paint" },
    //     { value: "Plumbing", label: "Plumbing" },
    //     { value: "Electrical", label: "Electrical" },
    // ];

    const onHandleSelect = async (selectedOptions) => {
        setSelectedOptions(selectedOptions);
        let result = await axios.get(`http://localhost:5150/technician`)
        selectedOptions(result.data)
    };

    const onOtherHandleSelect = async (otherSelectedOptions) => {
        setOtherSelectedOptions(otherSelectedOptions);
        let result = await axios.get(`http://localhost:5150/category`)
        otherSelectedOptions(result.data)
    };

    return (
        <div className="Technician">
            <div>Technician Name:</div>
            <select
                value={selectedOptions}
                onChange={(e) => onHandleSelect(e.target.value)}>
                <option value="">Select Name</option>
                {selectedOptions.map((s) => (
                    <option key={s.value} value={s.value}>
                        {s.label}{" "}
                    </option>
                ))}
            </select>
            <div>
                <div>Issue</div>
                <select
                    value={otherSelectedOptions}
                    onChange={(e) => onOtherHandleSelect(e.target.value)}>
                    <option value="">Select Issue</option>
                    {otherSelectedOptions.map((s) => (
                        <option key={s.value} value={s.value}>
                            {s.label}{" "}
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

