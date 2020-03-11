import React from 'react';
import {connect} from "react-redux";
import {Inc3} from "../ac";

const Comp3 = ({count1, count2, count3, Inc3}) => {
  const handleClick = () => {
    Inc3();
  }
  return (
    <>
      <h1>Comp3 {`count2: ${count2} count3: ${count3} `}</h1>
      {console.log("Comp3 count1", count1, "не рендерится Comp3 при click Comp1, потому что это виртуал дом")}

      <button onClick={handleClick}>+</button>
    </>
  );
};

export default connect(
  state => ({
    count1: state.red1.count1,
    count2: state.red2.count2,
    count3: state.red3.count3
  }),
  {Inc3}

)(Comp3);