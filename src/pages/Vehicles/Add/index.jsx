import React, { useState } from "react";
import "./addVehicle.css";
import InputField from "../../../components/UI/InputField";
import Dropdown from "../../../components/UI/Dropdown";
import Button from "../../../components/UI/Button";
import { useDispatch } from "react-redux";
import { addVehicle } from "../../../redux/vehiclesSlice";

const AddVehicle = () => {
  const [vehicleDetails, setVehicleDetails] = useState({
    name: "",
    positionX: 0,
    positionY: 0,
    speed: 0,
    direction: "towards",
  });

  const handleChange = (e) => {
    setVehicleDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addVehicle(vehicleDetails));
  };

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
          onChange={handleChange}
        />

        <InputField
          id="vehicleName"
          label="Vehicle Name"
          name="name"
          placeholder="Target abc"
          onChange={handleChange}
          value={vehicleDetails.name}
        />

        <InputField
          id="speed"
          label="Speed"
          name="speed"
          placeholder="2"
          type="number"
          onChange={handleChange}
          value={vehicleDetails.speed}
        />

        <InputField
          id="positionX"
          label="Position X"
          name="positionX"
          placeholder="1000"
          type="number"
          onChange={handleChange}
          value={vehicleDetails.positionX}
        />

        <InputField
          id="positionY"
          label="Position Y"
          name="positionY"
          placeholder="20"
          type="number"
          onChange={handleChange}
          value={vehicleDetails.positionY}
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
          onChange={handleChange}
          value={vehicleDetails.direction}
        />
      </form>

      <div className="buttons_group">
        <Button
          title="Add"
          bgColor="#5EB75C"
          textColor="white"
          onClick={handleSubmit}
        />
        <Button title="Reset" bgColor="#E17A36" textColor="white" />
        <Button title="Go Back" bgColor="#489BBC" textColor="white" />
      </div>
    </div>
  );
};

export default AddVehicle;
