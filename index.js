function bfs(rootNode, vertices, edges){

}

function findAdjacent(rootNode, vertices, edges){
  let vert = []
  for (let edge of edges){
    if (edge.includes(rootNode)){
      for (vertice of edge){
        if(vertice !== rootNode){
          let connection = vertices.find(e => e.name = vertice)
          vert.push(connection)
        }
      }
    }
  }
  return vert
}
