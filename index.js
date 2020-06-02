function bfs(rootNode, vertices, edges){

}

function findAdjacent(rootNode, vertices, edges){
  let vert = []
  for (let edge of edges){
    if (edge.includes(rootNode)){
      for (let vertice of edge){
        if( vertice !== rootNode){
          const connection = vertices.find(e => e.name = vertice)
          connection.distance = 0
          vert.push(connection)
        }
      }
    }
  }
  return vert
}
