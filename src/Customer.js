import { React, useEffect, useState, useRef } from "react";
import axios from "axios";
import "./Customer.css";

const Customer = () => {
    let inputNameRef = useRef("");

    const [categoryOptions, setCategoryOptions] = useState([]);
    const [urgentOptions, setUrgentOptions] = useState([]);
    const [categoryListId, setCategoryListId] = useState(0)
    const [urgencyListId, setUrgencyListId] = useState(0)

    useEffect(() => {
        const fetch = async () => {
            let r = await axios.get(`http://localhost:5150/category`)
            setCategoryOptions(r.data)
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

    const onhandleSelect = async (category) => {
        setCategoryOptions(category);
        console.log(categoryListId)
        let result = await axios.get(`http://localhost:5150/category`)
        setCategoryListId(result.data)
    };

    const onhandleClick = async (urgency) => {
        setUrgentOptions(urgency);
        console.log(urgencyListId)
        let result = await axios.get(`http://localhost:5150/Urgency`)
        setUrgencyListId(result.data)
    };

    const addCustomerHandler = async (listId) => {
        let data = {
            "customer_name": inputNameRef.current.value
        }
        let r = await axios.post(`http://localhost:5150/Customer`, data)
        console.log(r)
    }

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
                onChange={(e) => onhandleSelect(e.target.value)}>
                <option value="">
                    Select Category
                </option>
                {categoryOptions.map((s) => (
                    <option key={s.category_id} value={s.category_id}>
                        {s.category_name}
                    </option>
                ))}
            </select>
            <div className="urgency-select">
                <div className="urgency">
                    Urgency:
                </div>
                <select
                    onChange={(e) => onhandleClick(e.target.value)}>
                    <option value="">
                        Select Category
                    </option>
                    {urgentOptions.map((s) => (
                        <option key={s.urgency_id} value={s.urgency_id}>
                            {s.urgency_name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="submit-button">
                <button className="btn" onClick={() => addCustomerHandler()}>Submit</button>
            </div>
        </div >
    );
};

export default Customer;