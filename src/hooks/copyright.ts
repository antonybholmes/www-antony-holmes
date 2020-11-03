import useSiteMetadata from "./sitemetadata"

const useCopyright = () => {
  const { siteTitle } = useSiteMetadata()

  return `Copyright \u00a9 ${new Date().getFullYear()} ${siteTitle}. All rights reserved.`
}

export default useCopyright
