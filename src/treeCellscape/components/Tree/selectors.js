import { scaleLinear } from "d3";
import { getCurrTreeRootRecord, getIndicesPerPixel } from "../selectors.js";
import { createSelector } from "reselect";
import config from "./config.js";

export {
  makeIsIndexHighlighted,
  makeIsIndexRangeHighlighted,
  getCurrTreeRootID,
  makeGetTreeNodeRecordByID,
  getTreeData
} from "../selectors.js";

export { makeGetTreeElementsByChildren } from "./elementsSelector.js";

/**
 * Get max height of tree
 */
export const getMaxHeight = createSelector(
  [getCurrTreeRootRecord],
  // object => int
  treeRoot => treeRoot["maxHeight"]
);

/**
 * Gets offset index distance - the number of indices to remove at the end for branch/cluster spacing
 */
export const getOffsetIndex = createSelector(
  [getIndicesPerPixel],
  // int => int
  indPerPx => indPerPx * config["clusterVerticalOffset"]
);

/**
 * Gets heatmap index to y-coordinate scale
 */
export const getYScale = createSelector(
  [getCurrTreeRootRecord],
  // int => func
  treeRoot => {
    return scaleLinear()
      .domain([treeRoot["heatmapIndex"], treeRoot["maxDescendantIndex"]])
      .range([config["nodeRadius"], config["height"]]);
  }
);

/**
 * Gets x position for tree component given some depth
 * @param {int} depth
 * @return {int}
 */
export const getXPosition = depth =>
  depth * config["depthSpacing"] + config["nodeRadius"];
