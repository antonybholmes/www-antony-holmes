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

  console.log(
    publicationMap.get(2021).map((publication, yearIndex: number) => {
      return publication.title
    })
  )

  return (
    <PageLayout title="Publications">
      <Container>
        {/* <MainSideCol>
        <> */}

        {Array.from(publicationMap.keys())
          .sort()
          .reverse()
          .map((year: number, yearIndex: number) => {
            return (
              <Row isVCentered={false} key={yearIndex} className="mb-8">
                <div className="w-1/10 text-blue-600">{year}</div>
                <div className="w-9/10 border border-solid border-gray-200 rounded-md p-4">
                  {publicationMap
                    .get(year)
                    .map((publication: any, pubIndex: number) => {
                      return (
                        <article className="mb-4">
                          <h4 className="m-0">{publication.title}</h4>
                          <section>{publication.authors}</section>
                          <section className="text-sm">
                            {publication.journal}. {publication.year}.
                          </section>
                        </article>
                      )
                    })}
                </div>
              </Row>
            )
          })}

        {/*</> <></>
      </MainSideCol> */}
      </Container>
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
