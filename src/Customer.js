import React from "react";
import "./Customer.css";
import { useState } from "react";

const Customer = () => {
  const [selectedOptions, setSelectedOptions] = useState('');
  const [urgentOptions, setUrgentOptions] = useState('');

  const categoryList = [
    { value: "paint", label: "Paint" },
    { value: "plumbing", label: "Plumbing" },
    { value: "electrical", label: "Electrical" },
  ];

  const list = [
    { value: "high", label: "High" },
    { value: "normal", label: "Normal" },
  ];

  const onhandleSelect = (e) => {
    setSelectedOptions(e);
  };

  const onhandleClick = (e) => {
    setUrgentOptions(e);
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
        {categoryList.map((s) => (
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
          {list.map((s) => (
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