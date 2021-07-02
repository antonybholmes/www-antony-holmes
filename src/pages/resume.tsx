import React from "react"
import { graphql, PageProps } from "gatsby"

import Row from "../components/row"
import Post from "../components/posts/post"
import useImageMap from "../utils/imagemap"
import { useState } from "react"
import BlueButton from "../components/links/bluebutton"
import PageLayout from "../components/layouts/pagelayout"
import Container from "../components/container"

type DataProps = {
  posts: {
    nodes: Array<{
      excerpt: string
      frontmatter: {
        date: string
        title: string
        description: string
        tags: Array<string>
      }
    }>
  }
}

const ResumePage: React.FC<PageProps<DataProps>> = ({ data }) => {
  const [records, setRecords] = useState(25)

  const posts = data.posts.nodes

  const imageMap = useImageMap(data)

  const handleMoreArticles = () => {
    setRecords(records * 2)
  }

  return (
    <PageLayout title="Resume">
      {/* <Container> */}

      <h3 className="uppercase">Experience</h3>
      <Row isVCentered={false} wrap={true} className="mb-8">
        <div className="w-full md:w-1/10 text-center md:text-left text-gray-300 mb-2 md:pr-4 uppercase">
          2015 - present
        </div>
        <div className="w-full md:w-9/10 border border-solid border-gray-200 rounded-md p-4">
          <h4>Senior Developer, Columbia University New York</h4>
          <p>
            I design data pipelines for processing single cell RNA-seq data as
            well as specialized biology application development, database
            administration, and REST based web application development.
          </p>
          <ul className="list-inside list-disc">
            <li>
              Developed database backed genomic web applications running on
              Amazon Web Services using a mixture of Django, Spring Boot, and
              Postgresql.
            </li>
            <li>
              Developed and implemented a strategy to move lab data and core
              applications onto Amazon Web Services for significant cost
              savings.
            </li>
            <li>
              Served as AWS administrator and full stack developer for our group
              working on database and web applications using S3, EC2, Cloudfront
              for deployment to a team of 20 people.
            </li>
            <li>
              Managed the complete redesign of the Institute for Cancer
              Genetic's web site as a JAMStack application using React and
              Gatsby in less than 6 months. This modernized and optimized the
              site to be performant as well as offering a solution tailored to
              the institute's need. It resulted in a saving of $40,000 by
              eliminating the reliance the original site had on Drupal and an
              external provider to manage it.
            </li>
          </ul>
        </div>
      </Row>

      <Row isVCentered={false} wrap={true} className="mb-8">
        <div className="w-full md:w-1/10 text-center md:text-left text-gray-300 mb-2 md:pr-4 uppercase">
          2012 - 2015
        </div>
        <div className="w-full md:w-9/10 border border-solid border-gray-200 rounded-md p-4">
          <h4>Associate Research Scientist, Columbia University New York</h4>
          <p>
            I design data pipelines for processing single cell RNA-seq data as
            well as specialized biology application development, database
            administration, and REST based web application development.
          </p>
          <ul className="list-inside list-disc">
            <li>
              Worked as the lead Bioinformatician and software developer in the
              lab of Riccardo Dalla-Favera
            </li>
            <li>
              Successfully managed the transition of the lab from purely wet
              biology to a mixed biology and computational group
            </li>
            <li>
              Reduced data analysis time on many projects from days to hours by
              bringing data analysis in house and standardizing processes and
              methods.
            </li>
            <li>
              Implemented data pipelines to process and analyze next generation
              sequencing data including microarray, SNP 6.0, RNA-seq, Chip-seq,
              and single cell genomic data.
            </li>
            <li>
              Developed a suite of open source applications in Java for
              biological data analysis with easy to use interfaces to allow non
              computational scientists to do common tasks including performing
              statistical analysis and visualizing large data sets.
            </li>
            <li>
              My work resulted resulted in the publication of more than 16
              research papers in journals including Nature, Cell, Blood, and the
              New England Journal of Medicine, primary focussed on B-cell
              development and genetic lesions associated with development.
            </li>
          </ul>
        </div>
      </Row>

      <h3 className="uppercase">Volunteer Work</h3>

      <Row isVCentered={false} wrap={true} className="mb-8">
        <div className="w-full md:w-1/10 text-center md:text-left text-gray-300 mb-2 md:pr-4 uppercase">
          2017 - Present
        </div>
        <div className="w-full md:w-9/10 border border-solid border-gray-200 rounded-md p-4">
          <h4>Team Leader, New York Cares</h4>
          <p>
            I am an IRS certified volunteer tax preparer and I help low income
            New York residents prepare and file their tax returns for free
            during the tax season.
          </p>
          <ul className="list-inside list-disc">
            <li>
              Manage a small team of volunteers and act as a liaison between New
              York Cares and partner organizations.
            </li>
            <li>
              Talk with clients to understand their tax situation and assemble
              all their documents for them.
            </li>
            <li>
              Prepare and file federal and state tax forms for up to 200 clients
              each tax season saving clients $100,000 in preparation fees.
            </li>
            <li>
              Quality review tax returns for accuracy. I oversee work prepared
              by junior volunteers.
            </li>
          </ul>
        </div>
      </Row>

      <h3 className="uppercase">Education</h3>

      <Row isVCentered={false} wrap={true} className="mb-8">
        <div className="w-full md:w-1/10 text-center md:text-left text-gray-300 mb-2 md:pr-4 uppercase">
          2009
        </div>
        <div className="w-full md:w-9/10 border border-solid border-gray-200 rounded-md p-4">
          <h4>Ph.D in Mathematical Biology</h4>
          <h5>University of Warwick, UK</h5>
          <p>
            Understanding morphogenesis in myxobacteria from a theoretical and
            experimental perspective
          </p>
        </div>
      </Row>

      <Row isVCentered={false} wrap={true} className="mb-8">
        <div className="w-full md:w-1/10 text-center md:text-left text-gray-300 mb-2 md:pr-4 uppercase">
          2005
        </div>
        <div className="w-full md:w-9/10 border border-solid border-gray-200 rounded-md p-4">
          <h4>M.Sc in Computer Science</h4>
          <h5>University of Warwick, UK</h5>
        </div>
      </Row>

      <Row isVCentered={false} wrap={true} className="mb-8">
        <div className="w-full md:w-1/10 text-center md:text-left text-gray-300 mb-2 md:pr-4 uppercase">
          2004
        </div>
        <div className="w-full md:w-9/10 border border-solid border-gray-200 rounded-md p-4">
          <h4>B.Sc in Computer Science</h4>
          <h5>University of Warwick, UK</h5>
          <p>First-class honours</p>
        </div>
      </Row>
      {/* </Container> */}
    </PageLayout>
  )
}

export default ResumePage

export const pageQuery = graphql`
  query ResumeQuery {
    posts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/posts/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        excerpt
        frontmatter {
          id
          date
          title
          description
          tags
        }
      }
    }

    postImages: allFile(
      filter: { absolutePath: { regex: "/posts/" }, ext: { regex: "/jpg/" } }
    ) {
      nodes {
        name
        ext
        relativePath
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  }
`
