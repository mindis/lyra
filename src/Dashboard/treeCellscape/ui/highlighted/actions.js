import types from "./types.js";

/**
 * Highlight given cell index/indices
 * @param {int || array} index
 */
export const highlightElement = ({ index, range, element, id, data }) => ({
  type: types.highlightElement,
  index,
  range,
  element,
  id,
  data
});

/**
 * Unhighlight current cell index/indices
 */
export const unhighlightElement = () => ({
  type: types.unhighlightElement
});

export const highlightSegment = segment => ({
  type: types.highlightSegment,
  segment
});
