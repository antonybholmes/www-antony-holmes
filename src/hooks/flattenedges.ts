// ==========================================================================================
// Copyright (c) 2020 Hyperion Bio Inc.
//
// Unauthorized copying of any portion of this product via any medium is strictly prohibited.
//
// Authors: Antony Holmes
// ==========================================================================================

const useFlattenEdges = (edges: any) => {
  const ret: any = []

  edges.forEach(({ node }: any) => {
    ret.push(node)
  })

  return ret
}

export default useFlattenEdges
