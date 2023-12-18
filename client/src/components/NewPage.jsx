import React from "react";
import {useLocation} from 'react-router-dom';


const NewPage = () => {
  const location = useLocation();

  return (
    <div>
      <h2>{location.state.fname} {location.state.lname}</h2>
    </div>
  );
};

export default NewPage;
