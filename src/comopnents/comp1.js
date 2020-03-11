import React from 'react';
import {connect} from "react-redux";
import {Inc1} from "../ac";

const Comp1 = ({count1, Inc1}) => {
  const handleClick = () => {
    Inc1();
  }
  return (
    <>
      <h1>Comp1 {count1}</h1>
      {console.log("Comp1 ")}

      <button onClick={handleClick}>+</button>
    </>
  );
};

export default connect(
  state => ({
    count1: state.red1.count1
  }),
  {Inc1}

)(Comp1);