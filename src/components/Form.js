import React, { useState } from "react";

function Form() {
  // const [firstName, setFirstName] = useState("John");
  // const [lastName, setLastName] = useState("Henry");

  //refactor the above
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry"
  });

  // function handleFirstNameChange(event) {
  //   setFormData({...formData, firstName: event.target.value});
  // }

  // function handleLastNameChange(event) {
  //   setFormData({...formData, lastName: event.target.value});
  // }

  //refactor the above callback functions into a more generic one
  function handleChange(event) {
    const name = event.target.name; //represents the property key in the formData object that we wish to update
    let value = event.target.value;

    //if the input type is checkbox, value should be event.target.checked
    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }

    setFormData({...formData, [name]: value});
  }

  function handleSubmit(event){
    event.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstName" onChange={handleChange} value={formData.firstName} />
      <input type="text" name="lastName" onChange={handleChange} value={formData.lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
