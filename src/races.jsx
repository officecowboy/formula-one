import React, { useEffect, useState } from "react";
import { ReactComponent as BackArrow } from "./assets/arrow-left.svg";
import { ReactComponent as NextArrow } from "./assets/arrow-right.svg";
import Card from './card';

let Race = () => {
  const [races, setRaces] = useState([])

  const apiCall = () => {
    fetch(`https://f12018-api.herokuapp.com/api/races`)
      .then(res => res.json())
      .then(data => setRaces(data))
      .catch(error => console.error(error, "error"))
  }

  useEffect(() => {
    apiCall()
  }, [])

  const [currentRace, setCurrentRace] = useState(0)

  const handleBack = () => {
    if (currentRace === 0) {
      setCurrentRace(races.length - 1);
    } else {
      setCurrentRace((currentRace) => currentRace - 1);
    }
  };

  const handleNext = () => {
    if (currentRace === races.length - 1) {
      setCurrentRace(0);
    } else {
      setCurrentRace((currentRace) => currentRace + 1);
    }
  }

  return (
    <div>
      <div className="race-slider">
        <BackArrow className="arrow" onClick={handleBack} />
        {races.length && <Card race={races[currentRace]} />}
        <NextArrow className="arrow" onClick={handleNext} />
      </div>
    </div>
  )
}

export default Race;