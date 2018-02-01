/**
* Selectors for common tree cellscape
*/


import { createSelector } from 'reselect'


import { treeConfig, heatmapConfig } from 'config/treeCellscape.js'

import { stateSelectors } from 'state/reducers/index.js'

const { 
	treeRootIDSelector,
	treeDataSelector,

	uiHighlightedIndexSelector,
	uiHighlightedRangeSelector,
	indexToIDSelector
} = stateSelectors 




/******************************************
* STATE TREE SELECTORS
*******************************************/

export const getTreeRootID = treeRootIDSelector
export const getTreeNodeRecords = treeDataSelector


export const getHighlightedIndex = uiHighlightedIndexSelector
const getHighlightedRange = uiHighlightedRangeSelector
const getIndexToIDMapping = indexToIDSelector



/******************************************
* DATA SELECTORS
*******************************************/

/**
* Gets tree root record
*/
export const getTreeRootRecord = createSelector(
	[ getTreeNodeRecords, getTreeRootID ],
	// (object, string) => object
	(nodes, rootID) => (nodes[rootID])
)




/******************************************
* DRAWING SELECTORS
*******************************************/


/**
* Gets number of nodes contained in tree from root
*/
export const getTotalIndexNum = createSelector(
	[ getTreeRootRecord ],
	// object => int
	(treeRoot) => (treeRoot['maxDescendantIndex'] + 1)
)



/**
* Gets ratio of heatmap indices per pixel
*/
export const getIndicesPerPixel = createSelector(
	[ getTotalIndexNum ],
	// int => int
	(numNodes) => (Math.max(1, Math.ceil(numNodes / treeConfig['height'])))
)




/**
* Gets number of indices that can fit per heatmap row
*/
export const getIndicesPerRow = createSelector(
	[ getIndicesPerPixel ],
	// int => int
	(indPerPx) => (indPerPx * heatmapConfig['rowHeight'])
)


/**
* Gets threshold index distance - the number of indices apart children have to be in order to be visible
*/
export const getThresholdIndex = createSelector(
	[ getIndicesPerRow ],
	// int => int
	(indPerRow) => (indPerRow * 4)
)



/******************************************
* HIGHLIGHTED CELLS SELECTORS
*******************************************/

/**
* Returns tooltip text - either cell ID (node and row) or # of descendents (clusters)
*/
export const getTooltipText = createSelector(
	[ getHighlightedIndex, getHighlightedRange, getIndexToIDMapping ],
	(index, range, indexToID) => (
		isCluster(index, range)
			? (range[1] - range[0] + 1) + ' descendents'
			: indexToID[index])
)

/** 
*	Factory function - determines whether given index is currently highlighted
*/
export const makeIsIndexHighlighted = () => createSelector(
	[ getHighlightedIndex, getHighlightedRange, (state, index) => index ],
	(highlightedIndex, highlightedRange, index) => (
		isCluster(highlightedIndex, highlightedRange) 
			? highlightedRange[0] <= index && index <= highlightedRange[1] 
			: highlightedIndex === index
		)
)

/** 
*	Factory function - determines whether given index range is currently highlighted
*/
export const makeIsIndexRangeHighlighted = () => createSelector(
	[ getHighlightedIndex, getHighlightedRange, (state, minIndex, maxIndex) => ([minIndex, maxIndex])],
	(highlightedIndex, highlightedRange, indexRange) => (
		isCluster(highlightedIndex, highlightedRange)
			? highlightedRange[0] === indexRange[0] && highlightedRange[1] === indexRange[1]
			: indexRange[0] <= highlightedIndex && highlightedIndex <= indexRange[1]
	)
)



/** 
* Determines whether given element index/indices is a node or cluster
* @param { null || int } index
* @param { null || array } range
*/
const isCluster = (index, range) => (index === null && range !== null)
