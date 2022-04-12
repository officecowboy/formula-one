import React from 'react';

const race = (props) => {
  let { race } = props;
  let { location, podiumResults, fastestLap, fastestPitStop, laps, round } = race;
  return (
    <div className="card">
      <div className="round">ROUND {round}</div>
      <h3>
        <span>Location: </span>
        {location}
      </h3>
      <h3>
        <span>Podium Results: </span>
        {podiumResults}
      </h3>
      <h3>
        <span>Fastest Lap: </span>
        {fastestLap}
      </h3>
      <h3>
        <span>Fastest Pit Stop: </span>
        {fastestPitStop}
      </h3>
      <h3>
        <span>Laps: </span>
        {laps}
      </h3>
    </div>
  );
};
export default race;