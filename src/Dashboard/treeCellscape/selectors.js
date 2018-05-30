import { createSelector } from "reselect";

import { getTreeData, getTreeRootID } from "./stateSelectors.js";
import { getCurrRootID } from "./ui/selectors.js";

export * from "./data/selectors.js";
export * from "./ui/selectors.js";
export * from "main/selectors.js";
export * from "./stateSelectors.js";

/**
 * Gets tree root record
 */
export const getCurrTreeRootRecord = createSelector(
  [getTreeData, getCurrRootID],
  // (object, string) => object
  (nodes, rootID) => nodes[rootID]
);

export const getCurrTreeIndices = createSelector(
  [getCurrTreeRootRecord],
  root => (root ? createIndicesListForRange(root) : [])
);

const createIndicesListForRange = node => {
  const initArray = Array(
    node["maxDescendantIndex"] - node["heatmapIndex"] + 1
  );

  return Array.from(initArray, (_, x) => x + node["heatmapIndex"]);
};
