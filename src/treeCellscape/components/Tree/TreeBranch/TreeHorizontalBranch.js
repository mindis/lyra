/**
 * TreeHorizontalBranch presentational component
 */

import React from "react";
import PropTypes from "prop-types";

import { getXPosition } from "./selectors.js";

const TreeHorizontalBranch = ({
  heatmapIndex,
  depth,
  yScale,
  branchColor,
  branchWidth
}) => {
  const x1 = getXPosition(depth - 1);
  const x2 = getXPosition(depth);
  const y = yScale(heatmapIndex);
  return (
    <line
      x1={x1}
      y1={y}
      x2={x2}
      y2={y}
      stroke={branchColor}
      strokeWidth={branchWidth}
    />
  );
};

/**
 * PropTypes
 */
TreeHorizontalBranch.propTypes = {
  /** heatmapIndex */
  heatmapIndex: PropTypes.number.isRequired,

  /** depth */
  depth: PropTypes.number.isRequired,

  /** yScale */
  yScale: PropTypes.func.isRequired
};

export default TreeHorizontalBranch;
