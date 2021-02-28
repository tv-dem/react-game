import React from 'react';

const Statistic = ({score, bestScore}) => {
  return<div className="statistic-wrapper">
    <p>score: {score}</p>
    <p>best score: {bestScore}</p>
  </div>
}

export default Statistic;
