import React, { useEffect, useState } from "react";
import "./StopWatch.css";

function StopWatch(props) {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  const startTime = () => {
    setRunning(true)
    setDisabled(true)
  }

  const stopTime = () => {
    setRunning(false)
    setDisabled(false)
  }

//   const isDisabled = () => {
//     if (running === false && time === 0) {
//         setDisabled(true)
//     }
//   }

  const resetTime = () => {
    if (running === false && time !== 0) {
      setTime(0);
      setDisabled(true);
    } else {
      setDisabled(true);
    }
  };

  return (
    <div className="stop-watch">
      <div className="time-sw">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}</span>
        <p className="symbol-sw">:</p>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
        <p className="symbol-sw">,</p>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className="btn-actions-sw"> 
        <button onClick={resetTime} disabled={disabled}>Reset</button>
        {running ? (
          <button onClick={stopTime} className="btn-stop">Stop</button>
        ) : (
          <button onClick={startTime} className="btn-start">Start</button>
        )}
      </div>
    </div>
  );
}

export default StopWatch;
