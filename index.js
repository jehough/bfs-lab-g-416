function bfs(rootNode, vertices, edges){

}

function findAdjacent(rootNode, vertices, edges){
  let vert = []
  for (let edge of edges){
    if (edge.includes(rootNode)){
      for (let vertex of edge){
        if( vertex !== rootNode){
          vertices.find(e => e.name === vertex && e.distance === null)?
            vert.push(vertices.find(e => e.name === vertex && e.distance === null)): null
        }
      }
    }
  }
  return vert
}

markDistanceAndPredecessor(node, adjacent){
  for(let connection of adjacent){
    connection.predecessor = node
    if (connection.distance === null){
      connection.distance = 1
    }
    else{
      connection.distance += 1
    }
  }
}
