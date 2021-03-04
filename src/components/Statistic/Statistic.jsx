import React from 'react';
import SoundSettingsContainer from "./SoundSettings/SoundSettindsContainer";

const Statistic = ({score, bestScore}) => {
  return <>
    <div className="statistic-wrapper">
      <p>score: {score}</p>
      <p>best score: {bestScore}</p>
    </div>
    <SoundSettingsContainer/>
  </>
}

export default Statistic;
