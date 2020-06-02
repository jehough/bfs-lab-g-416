function bfs(rootNode, vertices, edges){

}

function findAdjacent(rootNode, vertices, edges){
  let vert = []
  for (let edge of edges){
    if (edge.includes(rootNode)){
      for (let vertex of edge){
        if( vertex !== rootNode){
          const connect = vertices.find(e => e.name = vertex)
          if (!connect.distance){
            connect.distance = 0
            vert.push(connect)
          }
        }
      }
    }
  }
  console.log(vert)
  return vert
}
