/**
* Actions and action creators for tree cellscape
*/




// Actions

export const types = {
	fetchTreeRoot: "TREECELLSCAPE_FETCH_TREE_ROOT",
	fetchTreeRootSuccess: "TREECELLSCAPE_FETCH_TREE_ROOT_SUCCESS",

	fetchTreeNode: "TREECELLSCAPE_FETCH_TREE_NODE",
	fetchTreeNodeSuccess: "TREECELLSCAPE_FETCH_TREE_NODE_SUCCESS" 
}

export const fetchTreeRoot = () => ({
	type: types.fetchTreeRoot
})

export const fetchTreeRootSuccess = (treeRoot) => ({
	type: types.fetchTreeRootSuccess,
	root: treeRoot
})


export const fetchTreeNode = (nodeID) => ({
	type: types.fetchTreeNode,
	nodeID
})


export const fetchTreeNodeSuccess = (treeNode) => ({
	type: types.fetchTreeNodeSuccess,
	treeNode
})