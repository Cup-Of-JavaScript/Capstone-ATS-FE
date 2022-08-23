import { React, useState, useEffect, useRef } from "react";
import axios from 'axios'
import './Technician.css'


const Technician = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [otherSelectedOptions, setOtherSelectedOptions] = useState([])

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


    return (
        <div className="Technician">
            <form onSubmitCapture={onhandleSelect}>
                <div className="tech">Technician Name:</div>
                <select>
                    <option ref={inputIdRef} value="">Select Name</option>
                    {selectedOptions.map((s) => (
                        <option key={s.tech_id} value={s.tech_id}>
                            {s.tech_name}
                        </option>
                    ))}
                </select>
                <div>
                    <div className="issue">Issue</div>
                    <select>
                        <option ref={inputNameRef} value="">Select Issue</option>
                        {otherSelectedOptions.map((s) => (
                            <option key={s.category_id} value={s.category_id}>
                                {s.category_name}
                            </option>
                        ))}
                    </select>
                </div >
                <div>
                    <button className="accept-btn" type="submit">Accept</button>
                </div>
            </form>
        </div>
    )
}
export default Technician