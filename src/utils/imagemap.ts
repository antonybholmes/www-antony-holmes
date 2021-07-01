const useImageMap = (data: any, mapName: string = "postImages") => {
  const imageMap: any = {}

  for (const node of data[mapName].nodes) {
    const file = node

    if (file.ext === ".jpg") {
      //console.log(file)
      imageMap[file.name] = file
    }
  }

  if (data.generic !== undefined) {
    imageMap["generic"] = data.generic
  }

  return imageMap
}

export default useImageMap
