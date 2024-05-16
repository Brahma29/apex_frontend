import React from "react";
import "./home.css";

import Dropdown from "../../components/UI/Dropdown";
import Button from "../../components/UI/Button";

const Home = () => {
  return (
    <div className="page_wrapper">
      <p className="breadcrump">Home /</p>

      <div className="content_wrapper">
        <Dropdown
          label="Scenario"
          name="scenario"
          options={[
            {
              title: "Test Scenario",
              value: "testScenario",
            },
            {
              title: "My Scenario",
              value: "myScenario",
            },
          ]}
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
            {Array(3)
              .fill(0)
              .map((_each, i) => (
                <tr key={i}>
                  <td>1</td>
                  <td>Bus</td>
                  <td>30</td>
                  <td>215</td>
                  <td>3</td>
                  <td>Towards</td>
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
          />
          <Button title="Stop Simulation" bgColor="#489BBC" textColor="white" />
        </div>

        <div className="graph">
          <div className="vehicle">1</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
