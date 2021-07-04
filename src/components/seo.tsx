import React from "react"
import getSiteMetadata from "../utils/sitemetadata"
import { useLocation } from "@reach/router"
import { Helmet } from "react-helmet"

type SEOProps = {
  title: string
  description?: string
  url?: string
  isIndexed?: boolean
}

const SEO: React.FC<SEOProps> = ({
  title = "",
  description = "",
  url = "",
  isIndexed = true,
}) => {
  const location = useLocation()

  const { siteTitle, siteUrl, siteDescription, social } = getSiteMetadata()
  const titleTemplate = `%s | ${siteTitle}`

  if (url === "") {
    url = location.pathname
  }

  url = `${siteUrl}${url}`

  if (description === "") {
    description = siteDescription
  }

  return (
    <Helmet title={title} titleTemplate={titleTemplate}>
      <meta name="description" content={description} />
      {/* <meta name="image" content={seo.image} /> */}
      {url && <meta property="og:url" content={url} />}
      {/* {(article ? true : null) && <meta property="og:type" content="article" />} */}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {/* {seo.image && <meta property="og:image" content={seo.image} />} */}
      {/* <meta name="twitter:card" content="summary_large_image" /> */}
      {social.twitter && (
        <meta name="twitter:creator" content={social.twitter} />
      )}
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {/* {seo.image && <meta name="twitter:image" content={seo.image} />} */}

      {!isIndexed && <meta name="robots" content="noindex,nofollow" />}
      {!isIndexed && <meta name="googlebot" content="noindex,nofollow" />}
    </Helmet>
  )

  // <Helmet
  //   title={title}
  //   titleTemplate={titleTemplate}
  //   meta={[
  //     {
  //       name: `description`,
  //       content: description,
  //     },
  //     {
  //       name: `keywords`,
  //       content: keywords,
  //     },
  //     {
  //       property: `og:title`,
  //       content: title,
  //     },
  //     {
  //       property: `og:description`,
  //       content: description,
  //     },
  //     {
  //       property: `og:type`,
  //       content: `website`,
  //     },
  //     {
  //       name: `twitter:card`,
  //       content: `summary`,
  //     },
  //     {
  //       name: `twitter:creator`,
  //       content: social.twitter,
  //     },
  //     {
  //       name: `twitter:title`,
  //       content: title,
  //     },
  //     {
  //       name: `twitter:description`,
  //       content: description,
  //     },
  //   ].concat(meta)}
  // />
}

export default SEO
