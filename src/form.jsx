//form.jsx
import React, { useState } from "react";

const Form = () => {
  const [data, setData] = useState({
    name: "",
    gender: "",
    course: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Name: ${data.name}\nGender: ${data.gender}\nCourse: ${data.course}`
    );
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Simple React Form</h2>

      <form onSubmit={handleSubmit}>
        
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={data.name}
          onChange={handleChange}
        />
        <br /><br />

        {/* Gender (Radio Buttons) */}
        <label>Gender: </label>
        <input
          type="radio"
          name="gender"
          value="Male"
          onChange={handleChange}
        /> Male

        <input
          type="radio"
          name="gender"
          value="Female"
          onChange={handleChange}
        /> Female
        <br /><br />

        {/* Course (Dropdown) */}
        <label>Course: </label>
        <select
          name="course"
          value={data.course}
          onChange={handleChange}
        >
          <option value="">--Select--</option>
          <option value="BCA">BCA</option>
          <option value="MCA">MCA</option>
          <option value="BSc">BSc</option>
        </select>
        <br /><br />

        {/* Submit */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;