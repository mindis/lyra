import { createSelector } from "reselect";
import { treeConfig } from "../config.js";

import { getCurrRootTotalNodes as getTotalIndexNum } from "../selectors.js";

// Tooltip
export {
  getHighlightedElement,
  getHighlightedIndex,
  getHighlightedRange,
  isClade,
  isCluster,
  isRow
} from "../selectors.js";

// Menu
// makeGetIDsByIndices, makeGetMissingIDMappings -> Heatmap
export {
  getSelectedAnalysis,
  getSelectedDashboard,
  isCurrRootAtRoot
} from "../selectors.js";

// Tree
export {
  makeIsIndexRangeHighlighted,
  makeIsIndexHighlighted,
  getCurrRootID,
  getCurrRootRange
} from "../selectors.js";

// Heatmap
// makeIsIndexHighlighted, -> Tree
export {
  getCurrRootIndex,
  getOrderedChromosomeData,
  getChromosomeOrder,
  getSegsData,
  getMissingSegIDs,
  makeGetMissingIDMappings,
  makeGetIDsByIndices
} from "../selectors.js";

export { getCurrRootTotalNodes as getTotalIndexNum } from "../selectors.js";

/**
 * Gets ratio of heatmap indices per pixel
 */
export const getIndicesPerPixel = createSelector(
  [getTotalIndexNum],
  // int => int
  numNodes => numNodes / treeConfig["height"]
);
