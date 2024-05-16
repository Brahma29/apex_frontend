import React, { useEffect, useState } from "react";
import "./home.css";

import Dropdown from "../../components/UI/Dropdown";
import Button from "../../components/UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { fetchScenarios } from "../../redux/scenariosSlice";

const Home = () => {
  const { loading, scenarios, error } = useSelector((state) => state.scenarios);
  const dispatch = useDispatch();

  const [selectedScenario, setSelectedScenario] = useState("");

  let intervalIds = [];

  const randomColor =
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");

  const startSimulation = (elements) => {
    console.log({ elements });
    for (const element of elements) {
      const { id, direction, duration } = element;

      const move = () => {
        const element = document.getElementById(id);
        if (!element) {
          console.error(`Element with id "${id}" not found.`);
          return;
        }

        let currentPosition, updateProperty;

        switch (direction) {
          case "upwards":
            currentPosition = parseInt(element.style.top, 10) || 0;
            updateProperty = "top";
            break;
          case "downwards":
            currentPosition = parseInt(element.style.top, 10) || 0;
            updateProperty = "top";
            break;
          case "towards":
            currentPosition = parseInt(element.style.left, 10) || 0;
            updateProperty = "left";
            break;
          case "backwards":
            currentPosition = parseInt(element.style.left, 10) || 0;
            updateProperty = "left";
            break;
          default:
            console.error(
              `Invalid direction: "${direction}". Use "upwards", "downwards", "towards", or "backwards".`
            );
            return;
        }

        switch (direction) {
          case "upwards":
          case "towards":
            currentPosition -= 1;
            break;
          case "downwards":
            currentPosition += 1;
            break;
          case "backwards":
            currentPosition -= 1;
            break;
          default:
            return;
        }

        element.style[updateProperty] = `${currentPosition}px`;
      };

      const intervalId = setInterval(move, 10);
      intervalIds.push(intervalId);

      setTimeout(() => clearInterval(intervalId), duration * 1000);
    }
  };

  const stopSimulation = () => {
    for (let i = 0; i < intervalIds.length; i++) {
      clearInterval(intervalIds[i]);
    }
  };

  useEffect(() => {
    dispatch(fetchScenarios());
  }, [dispatch]);

  useEffect(() => {
    if (scenarios.length > 0) {
      setSelectedScenario(scenarios[0].id);
    }
  }, [scenarios]);

  const handleScenarioChange = (e) => {
    setSelectedScenario(e.target.value);
  };

  if (loading || !scenarios) return <p>loading...</p>;

  const selectedScenarioData = scenarios.find((s) => s.id === selectedScenario);

  const elements =
    selectedScenarioData &&
    selectedScenarioData.vehicles.map((v) => ({
      id: v.id,
      direction: v.direction,
      duration: (selectedScenarioData || scenarios[0]).time,
    }));

  return (
    <div className="page_wrapper">
      <p className="breadcrump">Home /</p>

      <div className="content_wrapper">
        <Dropdown
          label="Scenario"
          name="scenario"
          value={selectedScenario}
          onChange={handleScenarioChange}
          options={scenarios.map((each) => ({
            value: each.id,
            title: each.name,
          }))}
          style={{ width: "fit-content" }}
        />

        <table className="table" style={{ marginTop: "1rem" }}>
          <thead>
            <tr>
              <td>Vehicle Id</td>
              <td>Vehicle Name</td>
              <td>Position X</td>
              <td>Position Y</td>
              <td>Speed</td>
              <td>Direction</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
          </thead>

          <tbody>
            {selectedScenarioData &&
              selectedScenarioData.vehicles.map((each, i) => (
                <tr key={i}>
                  <td>{each.id}</td>
                  <td>{each.name}</td>
                  <td>{each.speed}</td>
                  <td>{each.positionX}</td>
                  <td>{each.positionY}</td>
                  <td>{each.direction}</td>
                  <td>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.6002 2.93315C23.8562 3.1892 24 3.53643 24 3.89849C24 4.26055 23.8562 4.60779 23.6002 4.86384L20.0988 8.36787L15.6321 3.90116L19.1335 0.399797C19.3895 0.143808 19.7368 0 20.0988 0C20.4609 0 20.8081 0.143808 21.0642 0.399797L23.6002 2.93315ZM18.0455 10.4186L13.5788 5.95185L2.23335 17.2999L0 24L6.70006 21.7666L18.0455 10.4186Z"
                        fill="black"
                      />
                    </svg>
                  </td>
                  <td>
                    <svg
                      width="21"
                      height="24"
                      viewBox="0 0 21 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.5 1.5H13.5C13.5 0.670875 12.8291 0 12 0H9C8.17088 0 7.5 0.670875 7.5 1.5H1.5C0.670875 1.5 0 2.17088 0 3V4.875C0 5.08237 0.167625 5.25 0.375 5.25H20.625C20.8324 5.25 21 5.08237 21 4.875V3C21 2.17088 20.3291 1.5 19.5 1.5Z"
                        fill="black"
                      />
                      <path
                        d="M6 9C5.79263 9 5.625 9.16763 5.625 9.375V19.125C5.625 19.3324 5.79263 19.5 6 19.5C6.20737 19.5 6.375 19.3324 6.375 19.125V9.375C6.375 9.16763 6.20737 9 6 9Z"
                        fill="black"
                      />
                      <path
                        d="M10.5 9C10.2926 9 10.125 9.16763 10.125 9.375V19.125C10.125 19.3324 10.2926 19.5 10.5 19.5C10.7074 19.5 10.875 19.3324 10.875 19.125V9.375C10.875 9.16763 10.7074 9 10.5 9Z"
                        fill="black"
                      />
                      <path
                        d="M15 9C14.7926 9 14.625 9.16763 14.625 9.375V19.125C14.625 19.3324 14.7926 19.5 15 19.5C15.2074 19.5 15.375 19.3324 15.375 19.125V9.375C15.375 9.16763 15.2074 9 15 9Z"
                        fill="black"
                      />
                      <path
                        d="M1.125 6V22.5C1.125 23.3291 1.79588 24 2.625 24H18.375C19.2041 24 19.875 23.3291 19.875 22.5V6H1.125ZM7.125 19.125C7.125 19.7464 6.62137 20.25 6 20.25C5.37863 20.25 4.875 19.7464 4.875 19.125V9.375C4.875 8.75363 5.37863 8.25 6 8.25C6.62137 8.25 7.125 8.75363 7.125 9.375V19.125ZM11.625 19.125C11.625 19.7464 11.1214 20.25 10.5 20.25C9.87863 20.25 9.375 19.7464 9.375 19.125V9.375C9.375 8.75363 9.87863 8.25 10.5 8.25C11.1214 8.25 11.625 8.75363 11.625 9.375V19.125ZM16.125 19.125C16.125 19.7464 15.6214 20.25 15 20.25C14.3786 20.25 13.875 19.7464 13.875 19.125V9.375C13.875 8.75363 14.3786 8.25 15 8.25C15.6214 8.25 16.125 8.75363 16.125 9.375V19.125Z"
                        fill="black"
                      />
                    </svg>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        <div className="simulation_controls">
          <Button
            title="Start Simulation"
            bgColor="#5EB75C"
            textColor="white"
            onClick={() => startSimulation(elements)}
          />
          <Button
            title="Stop Simulation"
            onClick={() => stopSimulation(elements)}
            bgColor="#489BBC"
            textColor="white"
          />
        </div>

        <div className="graph">
          {selectedScenarioData &&
            selectedScenarioData.vehicles.map((each, i) => (
              <div
                className="vehicle"
                key={each.id}
                id={each.id}
                style={{
                  backgroundColor: randomColor,
                  left: each.positionX,
                  top: each.positionY,
                }}
              >
                {i}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
