function bfs(rootNode, vertices, edges){

}

function findAdjacent(nodeName, vertices, edges){

}

function markDistanceAndPredecessor(predecessor, adjacentNodes){
  adjacentNodes.map((node) => {
    node.distance = predecessor.distance + 1;
    node.predecessor = predecessor
  })
}
