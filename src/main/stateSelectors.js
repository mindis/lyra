import { stateSelectors } from "./reducer.js";

export const {
  // Analyses
  getSelectedAnalysis,

  // Dashboard
  getSelectedDashboard,
  getTreeCellscape,
  getSegsData,
  getSegsPending,
  getTreePath,
  getTreeData,
  getTreePending,
  getTreeRootID,
  getCellsIndexToID,
  getChromosomeData,
  getChromosomeOrder,
  getHighlightedIndex,
  getHighlightedRange,
  getHighlightedElement,
  getRoot,
  getRootPath,
  getRootRanges
} = stateSelectors;
