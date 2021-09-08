import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

const LAUNCH_DETAILS = gql`
  query launchDetails($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_success
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

const renderLaunchDetails = (loading, error, data) => {
  if (loading) return <h4>Loading...</h4>;
  if (error) return <h4>Error Occurred</h4>;
  return (
    <div className="mt-3">
      <h4 className="display-4">
        <span className="text-dark">Mission: </span>
        {data.launch.mission_name}
      </h4>
      <h2>Launch Details</h2>
      <ul className="list-group">
        <li className="list-group-item py-3">
          Flight Number: {data.launch.flight_number}
        </li>
        <li className="list-group-item py-3">
          Launch Year: {data.launch.launch_year}
        </li>
        <li className="list-group-item py-3">
          Launch Successful:{" "}
          <span
            className={`${
              data.launch.launch_success ? "text-success" : "text-danger"
            }`}
          >
            <span style={{ fontWeight: "800" }}>
              {data.launch.launch_success ? "Yes" : "No"}
            </span>
          </span>
        </li>
      </ul>
      <h2 className="mt-3">Rocket Details</h2>
      <ul className="list-group">
        <li className="list-group-item py-3">
          Rocket ID: {data.launch.rocket.rocket_id}
        </li>
        <li className="list-group-item py-3">
          Rocket Name: {data.launch.rocket.rocket_name}
        </li>
        <li className="list-group-item py-3">
          Rocket Type:{data.launch.rocket.rocket_type}
        </li>
      </ul>
      <Link className="btn btn-secondary my-4" to="/">
        Back
      </Link>
    </div>
  );
};

export const LaunchDetails = (props) => {
  //console.log(props);
  const { loading, error, data } = useQuery(LAUNCH_DETAILS, {
    variables: { flight_number: Number(props.match.params.id) },
  });
  return (
    <div className="text-white" style={{ textAlign: "left" }}>
      {renderLaunchDetails(loading, error, data)}
    </div>
  );
};
