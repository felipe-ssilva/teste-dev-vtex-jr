import { MinicartState, MinicartAction } from "./types";
import { Constants } from "./constants";

const init: MinicartState = {
  isMinicartOpen: false,
};

export const minicartReducer = (
  state: MinicartState = init,
  action: MinicartAction
): MinicartState => {
  switch (action.type) {
    case Constants.SET_IS_MINICART_OPEN:
      return { isMinicartOpen: !state.isMinicartOpen };
    default:
      return state;
  }
};
