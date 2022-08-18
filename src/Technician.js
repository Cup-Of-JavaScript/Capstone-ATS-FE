import React from "react";
import { useState } from "react";
import './Technician.css'

const Technician = () => {
    const [selectedOptions, setSelectedOptions] = useState("");
    const [otherSelectedOptions, setOtherSelectedOptions] = useState("")

    const people = [
        { value: "Alice", label: "Alice" },
        { value: "Bob", label: "Bob" },
        { value: "Charlie", label: "Charlie" },
    ];

    const problems = [
        { value: "Paint", label: "Paint" },
        { value: "Plumbing", label: "Plumbing" },
        { value: "Electrical", label: "Electrical" },
    ];

    const onHandleSelect = (e) => {
        setSelectedOptions(e);
    };

    const onOtherHandleSelect = (e) => {
        setOtherSelectedOptions(e);
    };

    return (
        <div className="Technician">
            <div>Technician Name:</div>
            <select
                value={selectedOptions}
                onChange={(e) => onHandleSelect(e.target.value)}>
                <option value="">Select Name</option>
                {people.map((s) => (
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
                    {problems.map((s) => (
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

