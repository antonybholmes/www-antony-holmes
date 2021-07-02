import React from "react"
import { graphql, PageProps } from "gatsby"

import Row from "../components/row"
import Post from "../components/posts/post"
import useImageMap from "../utils/imagemap"
import { useState } from "react"
import BlueButton from "../components/links/bluebutton"
import PageLayout from "../components/layouts/pagelayout"
import Container from "../components/container"
import sortByDate from "../utils/sortbydate"
import BlueLink from "../components/links/bluelink"

export const pubmedUrl = (pubmed: number) => {
  return `https://pubmed.ncbi.nlm.nih.gov/${pubmed}/` //``https://www.ncbi.nlm.nih.gov/pubmed/?term=${pubmed}`
}

export const doiUrl = (doi: string) => {
  return `https://doi.org/${doi}`
}

type DataProps = {
  publications: {
    nodes: Array<{
      pmid: string
      pmcid: string
      doi: string
      title: string
      abstract: string
      authorList: Array<string>
      authors: string
      journal: string
      year: number
      month: number
      day: number
      volume: number
      issue: number
      pages: string
      tagList: Array<string>
      url: string
      labs: Array<string>
      peopleList: Array<string>
      isbn: string
    }>
  }
}

const PublicationsPage: React.FC<PageProps<DataProps>> = ({ data }) => {
  const publicationMap = sortByDate(data.publications.nodes)

  return (
    <PageLayout title="Publications">
      {/* <Container> */}
      {/* <MainSideCol>
        <> */}

      <h3>Publications</h3>
      <p>
        A list of the scientific literature I have authored, mostly concerned
        with cancer genetics in B-cell development.
      </p>
      <section className="mt-16">
        {Array.from(publicationMap.keys())
          .sort()
          .reverse()
          .map((year: number, yearIndex: number) => {
            return (
              <Row
                isVCentered={false}
                wrap={true}
                key={yearIndex}
                className="mb-8"
              >
                <div className="w-full md:w-2/10 text-center md:text-right text-gray-300 mb-2 md:pr-4">
                  {year}
                </div>
                <div className="w-full md:w-8/10 border border-solid border-gray-200 rounded-md p-4">
                  <ol>
                    {publicationMap
                      .get(year)
                      .map((publication: any, pubIndex: number) => {
                        let url

                        if (publication.url !== "") {
                          url = publication.url
                        } else if (publication.doi !== "") {
                          url = doiUrl(publication.doi)
                        } else if (publication.pmid !== "") {
                          url = pubmedUrl(publication.pmid)
                        } else {
                          url = ""
                        }

                        return (
                          <li className="mb-4">
                            <h5 className="m-0">
                              {url !== "" ? (
                                <BlueLink to={url} underline={true}>
                                  {publication.title}
                                </BlueLink>
                              ) : (
                                publication.title
                              )}
                            </h5>
                            <section className="text-sm">
                              {publication.authors}
                            </section>
                            <section className="text-sm">
                              {publication.journal}. {publication.year}.
                            </section>
                          </li>
                        )
                      })}
                  </ol>
                </div>
              </Row>
            )
          })}
      </section>
      {/*</> <></>
      </MainSideCol> */}
      {/* </Container> */}
    </PageLayout>
  )
}

export default PublicationsPage

export const pageQuery = graphql`
  query PublicationsQuery {
    publications: allPublicationsJson {
      nodes {
        pmid
        pmcid
        doi
        title
        abstract
        authorList
        authors
        journal
        year
        month
        day
        volume
        issue
        pages
        tagList
        url
        peopleList
        isbn
      }
    }
  }
`
