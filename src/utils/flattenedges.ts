const getFlattenEdges = (edges: any) => {
  const ret: any = []

  edges.forEach(({ node }: any) => {
    ret.push(node)
  })

  return ret
}

export default getFlattenEdges
