import ui from "./ui/reducer.js";
import { combineReducers } from "redux";

import shiftSelectors from "utils/shiftSelectors.js";
import { stateSelectors as uiStateSelectors } from "./ui/reducer.js";

const reducer = combineReducers({
  ui
});

/**
 * State Selectors
 */

const getUI = state => state.ui;

export const stateSelectors = {
  getUI,
  ...shiftSelectors(getUI, uiStateSelectors)
};

export default reducer;
