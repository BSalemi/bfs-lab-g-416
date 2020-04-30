function bfs(rootNode, vertices, edges){

}

function findAdjacent(nodeName,  vertices, edges){
  return edges.filter((edge) => {
    return edge.includes(nodeName)
  }).map((edge) => {
    return edge.filter((node)=> {
      return (node != nodeName)
    })[0]
  }).map((name) => {
    return findNode(name, vertices)
  }).filter((node) => {
    return node.distance == null;
  })
}
function markDistanceAndPredecessor(predecessor, adjacentNodes){
  adjacentNodes.map((node) => {
    node.distance = predecessor.distance + 1;
    node.predecessor = predecessor
  })
}
