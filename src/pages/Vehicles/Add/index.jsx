import React from "react";
import "./addVehicle.css";
import InputField from "../../../components/UI/InputField";
import Dropdown from "../../../components/UI/Dropdown";
import Button from "../../../components/UI/Button";

const AddVehicle = () => {
  return (
    <div className="page_wrapper">
      <p className="breadcrump">Vehicles / add</p>

      <h1 className="page_heading">Add Vehicle</h1>

      <form action="" className="form vehicle_form">
        <Dropdown
          id="scenario"
          label="Scenarios List"
          name="scenario"
          options={[
            {
              value: "testScenario",
              title: "Test Scenario",
            },
            {
              value: "testScenario",
              title: "Test Scenario",
            },
            {
              value: "testScenario",
              title: "Test Scenario",
            },
            {
              value: "testScenario",
              title: "Test Scenario",
            },
            {
              value: "testScenario",
              title: "Test Scenario",
            },
          ]}
        />

        <InputField
          id="vehicleName"
          label="Vehicle Name"
          name="vehicleName"
          placeholder="Target abc"
        />

        <InputField
          id="speed"
          label="Speed"
          name="speed"
          placeholder="2"
          type="number"
        />

        <InputField
          id="positionX"
          label="Position X"
          name="positionX"
          placeholder="1000"
          type="number"
        />

        <InputField
          id="positionY"
          label="Position Y"
          name="positionY"
          placeholder="20"
          type="number"
        />

        <Dropdown
          id="direction"
          label="Direction"
          name="direction"
          options={[
            {
              value: "towards",
              title: "Towards",
            },
            {
              value: "backwards",
              title: "Backwards",
            },
            {
              value: "upwards",
              title: "Upwards",
            },
            {
              value: "downwards",
              title: "Downwards",
            },
          ]}
        />
      </form>

      <div className="buttons_group">
        <Button title="Add" bgColor="#5EB75C" textColor="white" />
        <Button title="Reset" bgColor="#E17A36" textColor="white" />
        <Button title="Go Back" bgColor="#489BBC" textColor="white" />
      </div>
    </div>
  );
};

export default AddVehicle;
