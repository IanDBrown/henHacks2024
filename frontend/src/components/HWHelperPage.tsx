import React, { useState, useEffect } from 'react';
import "../css/App.css"; // Assuming your fade-in animation is defined here

const HWHelperPage: React.FC = () => {
  const [fadeIn, setFadeIn] = useState<boolean>(false);

  useEffect(() => {
    setFadeIn(true); // Trigger the fade-in effect when the component mounts
  }, []);

  return (
    <div className={`homework-helper-text ${fadeIn ? 'fade-in' : ''}`}>
      Homework Helper
    </div>
  );
};

export default HWHelperPage;
