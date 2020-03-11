import React from 'react';
import {connect} from "react-redux";
import {Inc2} from "../ac";

const Comp2 = ({count1, count2, Inc2}) => {
  const handleClick = () => {
    Inc2();
  }
  return (
    <>
      <h1>Comp2 {`count1: ${count1} count2: ${count2}`}</h1>
      {console.log("Comp2 ")}

      <button onClick={handleClick}>+</button>
    </>
  );
};

export default connect(
  state => ({
    count1: state.red1.count1,
    count2: state.red2.count2
  }),
  {Inc2}

)(Comp2);