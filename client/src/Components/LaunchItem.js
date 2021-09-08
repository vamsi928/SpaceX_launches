import React from "react";
import { Card } from "react-bootstrap";
import moment from "moment";
import { Link } from "react-router-dom";

export const LaunchItem = ({ launch }) => {
  return (
    <div>
      <Card className="mb-3">
        <Card.Body>
          <div className="row">
            <div className="col-md-9" style={{ textAlign: "left" }}>
              <p className="display-6">
                <strong>
                  Mission Name:{" "}
                  <span
                    className={
                      launch.launch_success ? "text-success" : "text-danger"
                    }
                  >
                    {launch.mission_name}
                  </span>
                </strong>
              </p>
              <p>
                Date:{" "}
                {moment(launch.launch_date_local).format("YYYY-MM-DD HH:ss")}
              </p>
            </div>
            <div className="col-md-3">
              <Link
                to={`/launch/${launch.flight_number}`}
                className="btn btn-secondary"
              >
                Launch Details
              </Link>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
