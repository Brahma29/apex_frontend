import React, { useState } from "react";
import "./addScenario.css";
import InputField from "../../../components/UI/InputField";
import Button from "../../../components/UI/Button";

const AddScenario = () => {
  const [scenarioDetails, setScenarioDetails] = useState({
    name: "",
    time: 10,
  });

  const handleChange = (e) => {
    setScenarioDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="page_wrapper">
      <p className="breadcrump">Scenarios / add</p>

      <h1 className="page_heading">Add Scenario</h1>
      <form action="" className="form">
        <div className="flex">
          <InputField
            name="name"
            label="Scenario Name"
            placeholder="Test Scenario"
            id="scenarioName"
            value={scenarioDetails.name}
            onChange={handleChange}
          />
          <InputField
            name="time"
            label="Scenario Time (seconds)"
            placeholder="10"
            type="number"
            id="scenariotime"
            value={scenarioDetails.time}
            onChange={handleChange}
          />
        </div>
      </form>

      <div className="buttons_group">
        <Button title="Add" bgColor="#5EB75C" textColor="white" />
        <Button title="Reset" bgColor="#E17A36" textColor="white" />
        <Button title="Go Back" bgColor="#489BBC" textColor="white" />
      </div>
    </div>
  );
};

export default AddScenario;
