import getSiteMetadata from "./sitemetadata"

const getCopyright = () => {
  const { siteTitle } = getSiteMetadata()

  return `Copyright \u00a9 ${new Date().getFullYear()} ${siteTitle}. All rights reserved.`
}

export default getCopyright
