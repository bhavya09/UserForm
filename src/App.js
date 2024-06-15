import { useState } from "react";
import "./styles.css";
import FormDetails from "./FormDetails";
import UserForm from "./UserForm";

export default function App() {
  const data = [
    {
      id: "name",
      label: "Name",
      inputType: "text",
      buttonName: "Next",
      placeholder: "Your Name...",
    },
    {
      id: "email",
      label: "Email",
      inputType: "email",
      buttonName: "Next",
      placeholder: "Your Email...",
    },
    {
      id: "dob",
      label: "DOB",
      inputType: "date",
      buttonName: "Next",
      placeholder: "",
    },
    {
      id: "password",
      label: "Password",
      inputType: "password",
      buttonName: "Submit",
      placeholder: "",
    },
  ];

  const [forms, setForms] = useState(data);
  const [index, setIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    password: "",
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    let id = e.target.id;
    let val = e.target.value;
    const copyFormData = { ...formData };
    copyFormData[id] = val;
    setFormData(copyFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (index === forms.length - 1) {
      console.log("Form Submitted");
      setIsFormSubmitted(true);
    } else {
      setIndex((idx) => idx + 1);
    }
  };

  const handleBack = (e) => {
    e.preventDefault();
    setIndex((idx) => idx - 1);
  };

  return (
    <div className="App">
      {!isFormSubmitted ? (
        <UserForm
          handleSubmit={handleSubmit}
          forms={forms}
          formData={formData}
          handleBack={handleBack}
          handleInputChange={handleInputChange}
          index={index}
        />
      ) : (
        <FormDetails formData={formData} />
      )}
    </div>
  );
}
