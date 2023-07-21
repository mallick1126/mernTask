import { useState } from "react";
import "../App.css";

const CreateUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    phoneNumber: "",
  });
  const [successAlert, setSuccessAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5555/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.status === 201) {
        setFormData({ name: "", email: "", age: "", phoneNumber: "" });
        setSuccessAlert(true);
        setErrorAlert(false);
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      console.error("Error creating user:", error);
      setSuccessAlert(false);
      setErrorAlert(true);
      setErrorMessage(
        error.message || "An unknown error occurred while creating the user."
      );
    }
  };

  return (
    <>
      <div className="form-container">
        {/* <h2>Create User</h2> */}
        {successAlert && (
          <div className="alert success-alert">User created successfully!</div>
        )}
        {errorAlert && <div className="alert error-alert">{errorMessage}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input
              value={formData.name}
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input
              value={formData.email}
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <label htmlFor="age">Age</label>
            <input
              value={formData.age}
              type="number"
              name="age"
              id="age"
              placeholder="Enter your age"
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <label htmlFor="phoneNumber">Phone</label>
            <input
              value={formData.phoneNumber}
              type="number"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="Enter your phone number"
              onChange={handleChange}
            />
          </div>
          <button className="btn" type="submit">
            Create User
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateUser;
