import React from "react";
import axios from "axios";
import "./Customer.css";
import { useState, useEffect } from "react";

const Customer = () => {
    const [selectedOptions, setSelectedOptions] = useState('');
    const [urgentOptions, setUrgentOptions] = useState('');

    useEffect(() => {
        const fetch = async () => {
            let r = await axios.get(`http://localhost:5150/category`)
            setSelectedOptions(r.data)
        }
        fetch()
    }, [])

    // const categoryList = [
    //     { value: "paint", label: "Paint" },
    //     { value: "plumbing", label: "Plumbing" },
    //     { value: "electrical", label: "Electrical" },
    // ];

    // const list = [
    //     { value: "high", label: "High" },
    //     { value: "normal", label: "Normal" },
    // ];

    const onhandleSelect = async (selectedOptions) => {
        setSelectedOptions(selectedOptions);
        let result = await axios.get(`http://localhost:5150/category`)
        selectedOptions(result.data)
    };

    const onhandleClick = async (urgentOptions) => {
        setUrgentOptions(urgentOptions);
        let result = await axios.get(`http://localhost:5150/Urgency`)
        urgentOptions(result.data)
    };


    return (
        <div className="customer">
            <div className="customer-name">
                Customer Name:
            </div>
            <input
                className="input-name"
                onClick={() => { }}
                placeholder="Full Name"
            ></input>
            <div className="category">
                Category:
            </div>
            <select
                value={selectedOptions}
                onChange={(e) => onhandleSelect(e.target.value)}
            >
                <option value="">
                    Select Category
                </option>
                {selectedOptions.map((s) => (
                    <option key={s.value} value={s.value}>
                        {s.label}{" "}
                    </option>
                ))}
            </select>
            <div className="urgency-select">
                <div className="urgency">
                    Urgency:
                </div>
                <select
                    value={urgentOptions}
                    onChange={(e) => onhandleClick(e.target.value)}>
                    <option value="">
                        Select Category
                    </option>
                    {urgentOptions.map((s) => (
                        <option key={s.value} value={s.value}>
                            {s.label}{" "}
                        </option>
                    ))}
                </select>
            </div>
            <div className="submit-button">
                <button className="btn">Submit</button>
            </div>
        </div >
    );
};

export default Customer;