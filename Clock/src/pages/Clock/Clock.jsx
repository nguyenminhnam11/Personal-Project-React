import React, { useEffect, useState } from "react";
import "./Clock.css";

function Clock(props) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const hours = currentTime.getHours() % 12 || 12;
  const minus = currentTime.getMinutes().toString().padStart(2, 0);
  const second = currentTime.getSeconds().toString().padStart(2, 0);
  const amPm = currentTime.getHours() >= 12 ? 'PM' : 'AM';
  
  return (
    <div className="clock">
      <div className="time-cl">
        <span className="hour-cl">{hours}</span>
        <p className="symbol-cl">:</p>
        <span className="minus-cl">{minus}</span>
        <p className="symbol-cl">:</p>
        <span className="second-cl">{second}</span>
        <div className="day-of">
          <p className="amPm">{amPm}</p>
        </div>
      </div>
    </div>
  );
}

export default Clock;
