const useImageMap = (data: any) => {
  const imageMap: any = {}

  for (const { node } of data.postImages.edges) {
    const file = node

    if (file.ext === ".jpg") {
      imageMap[file.name] = file
    }
  }

  if (data.generic !== undefined) {
    imageMap["generic"] = data.generic
  }

  return imageMap
}

export default useImageMap
