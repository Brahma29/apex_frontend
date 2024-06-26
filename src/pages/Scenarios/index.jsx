import React, { useEffect } from "react";
import "./scenarios.css";
import Button from "../../components/UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { deleteScenario, fetchScenarios } from "../../redux/scenariosSlice";
import { useNavigate } from "react-router-dom";

const Scenarios = () => {
  const { loading, scenarios, error } = useSelector((state) => state.scenarios);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchScenarios());
  }, [dispatch]);

  return (
    <div className="page_wrapper">
      <p className="breadcrump">Scenarios /</p>

      <div className="scenarios_page_header">
        <h1 className="page_heading scenario_page_heading">All Scenarios</h1>

        <div className="scenarios_options">
          <Button
            title="New Scenario"
            onClick={() => navigate("/scenarios/add")}
            bgColor="#489BBC"
            textColor="white"
          />
          <Button
            title="Add Vehicle"
            onClick={() => navigate("/vehicles/add")}
            bgColor="#5EB75C"
            textColor="white"
          />
          <Button title="Delete All" bgColor="#E17A36" textColor="white" />
        </div>
      </div>

      {loading ? (
        <div className="api_message">
          <p>Loading...</p>
        </div>
      ) : error ? (
        <div className="api_message">
          <p>{error}</p>
        </div>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <td>Scenario Id</td>
              <td>Scenario Name</td>
              <td>Scenario Time</td>
              <td>Number of vehicles</td>
              <td>Add Vehicle</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
          </thead>

          <tbody>
            {scenarios.map((each, i) => (
              <tr key={each.id}>
                <td>{each.id}</td>
                <td>{each.name}</td>
                <td>{each.time}s</td>
                <td>{each.vehicles.length}</td>
                <td>
                  <svg
                    width="24"
                    height="24"
                    onClick={() =>
                      navigate(`/vehicles/add?scenario=${each.id}`)
                    }
                    style={{ cursor: "pointer" }}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16.5 12.75H12.75V16.5C12.75 16.9125 12.4147 17.25 12 17.25C11.5853 17.25 11.25 16.9125 11.25 16.5V12.75H7.5C7.08525 12.75 6.75 12.4125 6.75 12C6.75 11.5875 7.08525 11.25 7.5 11.25H11.25V7.5C11.25 7.0875 11.5853 6.75 12 6.75C12.4147 6.75 12.75 7.0875 12.75 7.5V11.25H16.5C16.9147 11.25 17.25 11.5875 17.25 12C17.25 12.4125 16.9147 12.75 16.5 12.75ZM12 0C5.37225 0 0 5.37 0 12C0 18.63 5.37225 24 12 24C18.6277 24 24 18.63 24 12C24 5.37 18.6277 0 12 0Z"
                      fill="black"
                    />
                  </svg>
                </td>
                <td>
                  <svg
                    width="24"
                    height="24"
                    onClick={() => navigate(`/scenarios/update/${each.id}`)}
                    style={{ cursor: "pointer" }}
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
                    onClick={() => dispatch(deleteScenario({ id: each.id }))}
                    style={{ cursor: "pointer" }}
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
      )}
    </div>
  );
};

export default Scenarios;
