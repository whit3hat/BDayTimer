import React from "react";

const Wish = ({ name }) => {
  return (
    <div className="wish-message">
      Happy Birthday <span className="highlight">{name.toUpperCase()}</span> !!!
    </div>
  );
};

export default Wish;
