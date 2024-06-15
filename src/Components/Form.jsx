import React, { useState } from "react";

const Form = () => {
  const [fullName, setFullName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName } = e.target.elements;
    if (firstName.value !== "" && lastName.value !== "")
      setFullName("Full Name: " + firstName.value + " " + lastName.value);
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <h2>Full Name Display</h2>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" name="firstName" required />
        <br />
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" name="lastName" required />
        <br />
        <button type="submit">Submit</button>
      </form>
      <div>{fullName}</div>
    </>
  );
};

export default Form;
