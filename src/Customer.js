import { React, useEffect, useState, useRef } from "react";
import axios from "axios";
import "./Customer.css";

const Customer = () => {
    let inputNameRef = useRef(null);
    let inputCateIdRef = useRef(null);
    let inputUrgIdRef = useRef(null);

    const [selectedOptions, setSelectedOptions] = useState([]);
    const [urgentOptions, setUrgentOptions] = useState([]);
    const [categoryListId, setCategoryListId] = useState('')
    const [urgencyListId, setUrgencyListId] = useState('')
    const [buttonText, setButtonText] = useState("Submit");

    useEffect(() => {
        const fetch = async () => {
            let r = await axios.get(`http://localhost:5150/Category`)
            setSelectedOptions(r.data)
        }
        fetch()
    }, [])

    useEffect(() => {
        const fetch = async () => {
            let r = await axios.get(`http://localhost:5150/Urgency`)
            setUrgentOptions(r.data)
        }
        fetch()
    }, [])

    const onhandleSelect = async (inputText) => {
        setCategoryListId(inputText)
    };

    const onhandleSelectTwo = async (inputText) => {
        setUrgencyListId(inputText)
    };


    const addCustomerHandler = async (button) => {
        let customers = {
            "customer_name": inputNameRef.current.value,
            "category_id": parseInt(inputCateIdRef.current.value),
            "urgency_id": parseInt(inputUrgIdRef.current.value)
        }
        let r = await axios.post(`http://localhost:5150/Customer`, customers)
        console.log(r)
        if (button === buttonText) {
            setButtonText("Done");
        } else {
            setButtonText("Submit");
        }
    }

    return (
        <div className="customer">
            <div className="customer-name">
                Customer Name:
            </div>
            <div className="input">
                <input
                    ref={inputNameRef}
                    className="input-name"
                    placeholder="Full Name"
                ></input>
            </div>
            <div className="category">
                Category:
            </div>
            <select ref={inputCateIdRef} 
            onChange={(e) => onhandleSelect(e.target.value)} 
            value={categoryListId}>
                <option>
                    Select Category
                </option>
                {selectedOptions.map((s) => (
                    <option key={s.category_id} value={s.category_id}>
                        {s.category_name}
                    </option>
                ))}
            </select>
            <div className="urgency-select">
                <div className="urgency">
                    Urgency:
                </div>
                <select onChange={(e) => onhandleSelectTwo(e.target.value)} ref={inputUrgIdRef} value={urgencyListId}>
                    <option>
                        Select Category
                    </option>
                    {urgentOptions.map((s) => (
                        <option key={s.urgency_id} value={s.urgency_id}>
                            {s.urgency_name}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <button className="btn" type="submit" onClick={() => addCustomerHandler('Submit')}>{buttonText}</button>
            </div>
        </div>
    );
};

export default Customer;