import React, { useState } from 'react';
import './style.css'; // Import CSS file for styling

const ToggleButton = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="toggle-button">
      <input
        type="checkbox"
        id="toggle"
        checked={isChecked}
        onChange={handleToggle}
      />
      <label htmlFor="toggle" className="toggle-label"></label>
    </div>
  );
};

export default ToggleButton;