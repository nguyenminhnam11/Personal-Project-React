import React from "react";
import { useBattery } from "react-use";
import "./Battery.css";
import "boxicons";

function Battery(props) {
  const battery = useBattery();
  // Destructuring battery properties
  const { isSupported, level, charging } = battery;

  // Check if browser support Battery API
  if (!isSupported) {
    return (
      <div>
        <strong>Battery sensor</strong>: <span>Not supported</span>
      </div>
    );
  }

  return (
    <div className="battery">
      <box-icon name="signal-4" size="sm" color='#FFF'></box-icon>
      <box-icon name="wifi-2" size="sm" color='#FFF'></box-icon>
      <span>{(level * 100).toFixed(0)}%</span>
      {charging ? (<box-icon type='solid' name='battery-charging' size="md" color='#FFF'></box-icon>) : (<box-icon type="solid" name="battery" size="md" color='#FFF'></box-icon>)}
      
    </div>
  );
}

export default Battery;
