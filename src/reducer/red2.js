import {INC_2} from "../ac/types";

const initialState = {
  count2: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INC_2:
      return {
        ...state,
        count2: state.count2 + 1
      }
    default:
      return state
  }
}