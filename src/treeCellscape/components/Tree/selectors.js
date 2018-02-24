import { scaleLinear } from "d3";
import { getTreeRootRecord, getIndicesPerPixel } from "../selectors.js";

export {
  makeIsIndexHighlighted,
  makeIsIndexRangeHighlighted,
  getCurrTreeRootID,
  makeGetTreeNodeRecordByID
} from "../selectors.js";

export { makeGetTreeElementsByChildren } from "./elementsSelector.js";

/**
 * Get max height of tree
 */
export const getMaxHeight = createSelector(
  [getTreeRootRecord],
  // object => int
  treeRoot => treeRoot["maxHeight"]
);

/**
 * Gets offset index distance - the number of indices to remove at the end for branch/cluster spacing
 */
export const getOffsetIndex = createSelector(
  [getIndicesPerPixel],
  // int => int
  indPerPx => indPerPx * treeConfig["treeClusterVerticalOffset"]
);

/**
 * Gets heatmap index to y-coordinate scale
 */
export const getYScale = createSelector(
  [getTreeRootRecord],
  // int => func
  treeRoot =>
    scaleLinear()
      .domain([treeRoot["heatmapIndex"], treeRoot["maxDescendantIndex"]])
      .range([treeConfig["treeNodeRadius"], treeConfig["height"]])
);

/**
 * Gets x position for tree component given some depth
 * @param {int} depth
 * @return {int}
 */
export const getXPosition = depth =>
  depth * treeConfig.treeDepthSpacing + treeConfig.treeNodeRadius;
