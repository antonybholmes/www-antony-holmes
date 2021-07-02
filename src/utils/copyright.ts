import getSiteMetadata from "./sitemetadata"

const getCopyright = () => {
  const { siteTitle } = getSiteMetadata()

  return `\u00a9 ${new Date().getFullYear()} ${siteTitle}.`
}

export default getCopyright
