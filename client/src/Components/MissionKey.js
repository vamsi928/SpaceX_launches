import React from "react";

export const MissionKey = () => {
  return (
    <div
      className="my-3 text-white"
      style={{ textAlign: "left", fontStyle: "italic" }}
    >
      <p>
        Success =<span className="px-3 mx-2 bg-success"></span>
      </p>
      <p>
        Failed =<span className="px-3 mx-2 bg-danger"></span>
      </p>
    </div>
  );
};
