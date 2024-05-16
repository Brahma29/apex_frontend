import React, { useEffect, useState } from "react";
import "./addScenario.css";
import InputField from "../../../components/UI/InputField";
import Button from "../../../components/UI/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  createNewScenario,
  updateScenario,
} from "../../../redux/scenariosSlice";
import { useNavigate, useParams } from "react-router-dom";

const AddScenario = () => {
  const { id } = useParams();

  const [scenarioDetails, setScenarioDetails] = useState({
    name: "",
    time: 10,
  });

  const { error, scenarios, success } = useSelector((state) => state.scenarios);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setScenarioDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    if (!id) {
      dispatch(createNewScenario(scenarioDetails));
      if (success && !error) {
        alert("Scenario created successfully");
        setScenarioDetails({ name: "", time: 10 });
      }
      if (error) alert(error);
      return;
    }
    dispatch(updateScenario({ id, ...scenarioDetails }));
    if (success && !error) {
      alert("Scenario updated successfully");
      navigate("/scenarios");
    }
    if (error) alert(error);
  };

  useEffect(() => {
    if (id) {
      let scenario = scenarios.find((s) => s.id === id);

      if (scenario) {
        setScenarioDetails({ name: scenario.name, time: scenario.time });
      }
    }
  }, [id, scenarios]);

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
        <Button
          title={id ? "Update" : "Add"}
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

export default AddScenario;
