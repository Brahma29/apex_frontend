import React, { useEffect, useState } from "react";
import "./addVehicle.css";
import InputField from "../../../components/UI/InputField";
import Dropdown from "../../../components/UI/Dropdown";
import Button from "../../../components/UI/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  createNewVehicle,
  fetchVehicles,
  updateVehicle,
} from "../../../redux/vehiclesSlice";
import { fetchScenarios } from "../../../redux/scenariosSlice";
import { useNavigate, useParams } from "react-router-dom";

const initialState = {
  name: "",
  direction: "",
  positionX: 0,
  positionY: 0,
  scenario: "",
  speed: 0,
};

const AddVehicle = () => {
  const { id, scenario } = useParams();
  const { loading, scenarios, error } = useSelector((state) => state.scenarios);
  const {
    vehicles,
    success: vehiclesSuccess,
    error: vehicleError,
  } = useSelector((state) => state.vehicles);
  const [vehicleDetails, setVehicleDetails] = useState(initialState);

  const handleChange = (e) => {
    console.log(e.target.name);
    e.stopPropagation();
    setVehicleDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCreateVehicle = () => {
    if (Object.values(vehicleDetails).some((e) => e === "" || e === 0)) {
      alert("Please fill all the values.");
      return;
    }

    dispatch(createNewVehicle(vehicleDetails));
    if (vehiclesSuccess && !vehicleError) {
      alert("Vehicle created successfully");
      setVehicleDetails(initialState);
    }
    if (error) alert(error);
  };

  const handleUpdateVehicle = () => {
    dispatch(updateVehicle({ id, ...vehicleDetails }));
  };

  const handleReset = () => {
    setVehicleDetails(initialState);
    if (id) navigate("/vehicles/add");
  };

  useEffect(() => {
    dispatch(fetchScenarios());
    dispatch(fetchVehicles());
  }, [dispatch]);

  useEffect(() => {
    if (id) {
      const vehicleToUpdate = vehicles.find((v) => v.id === id);
      if (vehicleToUpdate) {
        setVehicleDetails({ ...vehicleToUpdate });
      }
    }

    if (scenario) {
      setVehicleDetails({ scenario: scenario });
    }
  }, [id, vehicles, scenario]);

  return (
    <div className="page_wrapper">
      <p className="breadcrump">Vehicles / add</p>

      <h1 className="page_heading">{id ? "Update" : "Add"} Vehicle</h1>

      {loading ? (
        <div className="api_message">
          <p>Loading...</p>
        </div>
      ) : error ? (
        <div className="api_message">
          <p>{error}</p>
        </div>
      ) : (
        <form action="" className="form vehicle_form">
          <Dropdown
            id="scenario"
            label="Scenarios List"
            name="scenario"
            placeholder="Select Scenario"
            options={scenarios.map((each) => ({
              value: each.id,
              title: each.name,
            }))}
            value={vehicleDetails.scenario}
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
            placeholder="Select Direction"
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
      )}

      <div className="buttons_group">
        <Button
          title={id ? "Update" : "Add"}
          bgColor="#5EB75C"
          textColor="white"
          onClick={id ? handleUpdateVehicle : handleCreateVehicle}
        />
        <Button
          title="Reset"
          onClick={handleReset}
          bgColor="#E17A36"
          textColor="white"
        />
        <Button
          title="Go Back"
          onClick={() => navigate(-1)}
          bgColor="#489BBC"
          textColor="white"
        />
      </div>
    </div>
  );
};

export default AddVehicle;
