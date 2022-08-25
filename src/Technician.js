import { React, useState, useEffect, useRef } from "react";
import axios from 'axios'
import './Technician.css'

const Technician = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [otherSelectedOptions, setOtherSelectedOptions] = useState([])
    const [buttonText, setButtonText] = useState("Accept");

    let inputIdRef = useRef(null)
    let inputNameRef = useRef(null)

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

    const onhandleSelect = async (event) => {
        event.preventDefault();
        let tech = {
            tech_name: inputNameRef.current.value,
            category_id: parseInt(inputIdRef.current.value)
        };
        let result = await axios.put(`http://localhost:5150/Technician`, tech)
        console.log(result.data)
    };

    const onHandleAccept = async (button) => {
        if (button === buttonText) {
            setButtonText("Done");
        } else {
            setButtonText("Accept");
        }
    }

    return (
        <div className="Technician">
            <form onSubmitCapture={onhandleSelect}>
                <div className="tech1">
                    <div className="tech">Technician Name:</div>
                    <select>
                        <option ref={inputIdRef} value="">Select Name</option>
                        {selectedOptions.map((s) => (
                            <option key={s.tech_id} value={s.tech_id}>
                                {s.tech_name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="issues">
                    <div className="issue">Customer Issue:</div>
                    <select>
                        <option ref={inputNameRef} value="">Select Customer Issue</option>
                        {otherSelectedOptions.map((s) => (
                            <option key={s.customer_id} value={s.customer_id}>
                                {s.customer_name} - {s.category_name}
                            </option>
                        ))}
                    </select>
                </div >
                <div>
                    <button className="accept-btn" type="submit" onClick={() => onHandleAccept('Accept')}>{buttonText}</button>
                </div>
            </form>
        </div>
    )
}
export default Technician