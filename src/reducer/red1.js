import {INC_1} from "../ac/types";

const initialState = {
  count1: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INC_1:
      return {
        ...state,
        count1: state.count1 + 1
      }
    default:
      return state
  }
}