import React from "react";
import { useQuery, gql } from "@apollo/client";
import { LaunchItem } from "./LaunchItem";
import { MissionKey } from "./MissionKey";

//specify the query we are making
const LAUNCHER = gql`
  query getLaunches {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_year
      launch_success
    }
  }
`;

const renderLaunches = (loading, error, data) => {
  if (loading) return <h4 className="text-white">Loading...</h4>;
  if (error) return <h4 className="text-white">Error Occurred</h4>;
  return data.launches.map((launch, i) => (
    <LaunchItem key={i} launch={launch}></LaunchItem>
  ));
};

export const Launcher = () => {
  //we get back these three fields from apollo useQuery function
  const { loading, error, data } = useQuery(LAUNCHER);
  return (
    <div>
      <h2 className="display-4 text-white" style={{ textAlign: "left" }}>
        Launches
      </h2>
      <MissionKey />
      {renderLaunches(loading, error, data)}
    </div>
  );
};
