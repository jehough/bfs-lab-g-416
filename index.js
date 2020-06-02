function bfs(rootNode, vertices, edges){

}

function findAdjacent(rootNode, vertices, edges){
  let vert = []
  for (let edge of edges){
    if (edge.includes(rootNode)){
      for (let vertex of edge){
        if( vertex !== rootNode){
          vert.push(vertices.find(e => e.name === vertex && !!e.distance))
        }
      }
    }
  }
  return vert
}
