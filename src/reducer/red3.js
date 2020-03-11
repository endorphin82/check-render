import {INC_3} from "../ac/types";

const initialState = {
  count3: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INC_3:
      return {
        ...state,
        count3: state.count3 + 1
      }
    default:
      return state
  }
}