import React from "react";
import Timer from "./Timer";
import Scoreboard from "./Scoreboard";
import ResetButton from "./ResetButton";

export default function Header() {
  return (
    <div className="row border">
      <div className="col-4">
        <Timer />
      </div>
      <div className="col-4">
        <ResetButton />
      </div>
      <div className="col-4">
        <Scoreboard />
      </div>
    </div>
  );
}
