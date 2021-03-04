import React from 'redux';
import {useEffect} from "react";

const ResultsWindow = ({results, OnEsc, closeSettings}) => {
  useEffect(() => {
    document.addEventListener('keydown', OnEsc);
    return () => document.removeEventListener('keydown', OnEsc);
  })
  return <>
    <div className={'best-result-container'}>
      {results.length ?
        <div className={'best-result-wrapper'}>
          <ul>
            <li>Data</li>
            {results.map(({time}, i) => {
              return <li key={i}>{time}</li>
            })}
          </ul>
          <ul>
            <li>score</li>
            {results.map(({score}, i) => {
              return <li key={i}>{score}</li>
            })}
          </ul>
        </div> :
        <div>
          <span className={'no-res'}>we have not results :(</span>
        </div>}
        <span onClick={closeSettings}>back</span>
    </div>

  </>
}

export default ResultsWindow;
