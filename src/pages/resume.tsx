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

const getTitle = (title: string) => (
  <header className="bg-gray-100 px-3 py-3">
    <h5 className="m-0">{title}</h5>
  </header>
)

const getLangTitle = (title: string) => <h5 className="m-0">{title}</h5>

const getLangList = (s: string) => <p className="m-0 text-gray-500">{s}</p>

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

      <h3 className="uppercase">Skills</h3>
      <Row isVCentered={false} wrap={true} className="mb-8">
        <div className="w-full md:w-2/10 text-center md:text-right text-gray-400 mb-2 md:pr-4 text-sm uppercase">
          Programming Languages
        </div>
        <section className="w-full md:w-8/10">
          <ol className="flex flex-row flex-wrap -mx-2">
            <li className="inline-block w-1/2">
              <div className="mx-2 mb-4 border border-solid border-gray-200 p-3 rounded-md">
                {getLangTitle("Java")}
                {getLangList("Tomcat, Spring Boot, Eclipse, Maven")}
              </div>
            </li>
            <li className="inline-block w-1/2">
              <div className="mx-2 mb-4 border border-solid border-gray-200 p-3 rounded-md">
                {getLangTitle("Python")}
                {getLangList(
                  "Django, Pandas, Scikit-learn, Matplotlib, Seaborn"
                )}
              </div>
            </li>
            <li className="inline-block w-1/2">
              <div className="mx-2 mb-4 border border-solid border-gray-200 p-3 rounded-md">
                {getLangTitle("Javascript")}
                {getLangList("React, Gatsby, Electron, Typescript")}
              </div>
            </li>
            <li className="inline-block w-1/2">
              <div className="mx-2 mb-4 border border-solid border-gray-200 p-3 rounded-md">
                {getLangTitle("C++")}
                {getLangList("STL, Boost")}
              </div>
            </li>
            <li className="inline-block w-1/2">
              <div className="mx-2 mb-4 border border-solid border-gray-200 p-3 rounded-md">
                {getLangTitle("Mathematical")}
                {getLangList("R, MATLAB")}
              </div>
            </li>
            <li className="inline-block w-1/2">
              <div className="mx-2 mb-4 border border-solid border-gray-200 p-3 rounded-md">
                {getLangTitle("Scripting")}
                {getLangList("BASH")}
              </div>
            </li>
          </ol>
        </section>
      </Row>

      <Row isVCentered={false} wrap={true} className="mb-8">
        <div className="w-full md:w-2/10 text-center md:text-right text-gray-400 mb-2 md:pr-4 text-sm uppercase">
          Services
        </div>
        <section className="w-full md:w-8/10">
          <ol className="flex flex-row flex-wrap -mx-2">
            <li className="inline-block w-1/2">
              <div className="mx-2 mb-2 border border-solid border-gray-200 p-3 rounded-md">
                {getLangTitle("Amazon Web Services")}
                {getLangList("EC2, S3, CloudFront RDS")}
                <p className="m-0">I am an institute AWS admininstrator.</p>
              </div>
            </li>
            <li className="inline-block w-1/2">
              <div className="mx-2 mb-2 border border-solid border-gray-200 p-3 rounded-md">
                {getLangTitle("Databases")}
                {getLangList("Postgresql, MySQL/MariaDB")}
                <p className="m-0">
                  I work as a database admin for departmental databases.
                </p>
              </div>
            </li>
          </ol>
        </section>
      </Row>

      <h3 className="uppercase">Experience</h3>
      <Row isVCentered={false} wrap={true} className="mb-8">
        <div className="w-full md:w-2/10 text-center md:text-right text-gray-400 mb-2 md:pr-4 uppercase">
          2015 - Present
        </div>
        <section className="w-full md:w-8/10 border border-solid border-gray-200 rounded-md overflow-hidden">
          {getTitle(
            "Senior Developer, Institute for Cancer Genetics Columbia University New York"
          )}
          <p className="m-3">
            I design data pipelines for processing single cell RNA-seq data as
            well as specialized biology application development, database
            administration, and REST based web application development.
          </p>
          <ul className="m-3 list-inside list-disc">
            <li className="mb-1">
              Developed database backed genomic web applications running on
              Amazon Web Services using a mixture of Django, Spring Boot, and
              Postgresql.
            </li>
            <li className="mb-1">
              Developed and implemented a strategy to move lab data and core
              applications onto Amazon Web Services for significant cost
              savings.
            </li>
            <li className="mb-1">
              Served as AWS administrator and full stack developer for our group
              working on database and web applications using S3, EC2, Cloudfront
              for deployment to a team of 20 people.
            </li>
            <li className="mb-1">
              Managed the complete redesign of the Institute for Cancer
              Genetic's web site as a JAMStack application using React and
              Gatsby in less than 6 months. This modernized and optimized the
              site to be performant as well as offering a solution tailored to
              the institute's need. It resulted in a saving of $40,000 by
              eliminating the reliance on Drupal and an external provider to
              manage it.
            </li>
          </ul>
        </section>
      </Row>

      <Row isVCentered={false} wrap={true} className="mb-8">
        <div className="w-full md:w-2/10 text-center md:text-right text-gray-400 mb-2 md:pr-4 uppercase">
          2012 - 2015
        </div>
        <div className="w-full md:w-8/10 border border-solid border-gray-200 rounded-md">
          {getTitle(
            "Associate Research Scientist, Columbia University New York"
          )}
          <p className="m-3">
            I design data pipelines for processing single cell RNA-seq data as
            well as specialized biology application development, database
            administration, and REST based web application development.
          </p>
          <ul className="m-3 list-inside list-disc">
            <li className="mb-1">
              Worked as the lead Bioinformatician and software developer in the
              lab of Riccardo Dalla-Favera.
            </li>
            <li className="mb-1">
              Successfully managed the transition of the lab from purely wet
              biology to a mixed biology and computational group.
            </li>
            <li className="mb-1">
              Reduced data analysis time on many projects from days to hours by
              bringing data analysis in house and standardizing processes and
              methods.
            </li>
            <li className="mb-1">
              Implemented data pipelines to process and analyze next generation
              sequencing data including microarray, SNP 6.0, RNA-seq, Chip-seq,
              and single cell genomic data.
            </li>
            <li className="mb-1">
              Developed a suite of open source applications in Java for
              biological data analysis with easy to use interfaces to allow non
              computational scientists to do common tasks including performing
              statistical analysis and visualizing large data sets.
            </li>
            <li className="mb-1">
              My work resulted resulted in the publication of more than 16
              research papers in journals including Nature, Cell, Blood, and the
              New England Journal of Medicine, primary focussed on B-cell
              development and genetic lesions associated with development.
            </li>
          </ul>
        </div>
      </Row>

      <Row isVCentered={false} wrap={true} className="mb-8">
        <div className="w-full md:w-2/10 text-center md:text-right text-gray-400 mb-2 md:pr-4 uppercase">
          2009 - 2012
        </div>
        <div className="w-full md:w-8/10 border border-solid border-gray-200 rounded-md">
          {getTitle(
            "Post Doctoral Research Scientist, Columbia University New York"
          )}

          <ul className="m-3 list-inside list-disc">
            <li className="mb-1">
              Studied patterns of influenza in New York by data mining
              electronic health record databases in conjunction with New York
              Presbyterian Hospital. Looked for novel relationships between rare
              diseases and comorbidities to find potential avenues for new
              therapeutics. This work resulted in three publications.
            </li>
            <li className="mb-1">
              Coordinated with the New York Presbyterian IT department to
              implement a research version of their electronic health records
              database for data mining purposes within our group. This was used
              by the lab over a 5 year period beyond when I left the lab.
            </li>
            <li className="mb-1">
              Developed applications in Matlab and Java to make statistics
              gathered from electronic health records user accessible.
            </li>
          </ul>
        </div>
      </Row>

      <Row isVCentered={false} wrap={true} className="mb-8">
        <div className="w-full md:w-2/10 text-center md:text-right text-gray-400 mb-2 md:pr-4 uppercase">
          2000 - 2004
        </div>
        <div className="w-full md:w-8/10 border border-solid border-gray-200 rounded-md">
          {getTitle("Bioinformatician, Unilever Research UK")}
          <p className="m-3">
            I designed data pipelines for processing single cell RNA-seq data as
            well as specialized biology application development, database
            administration, and REST based web application development.
          </p>
          <ul className="m-3 list-inside list-disc">
            <li className="mb-1">
              As a summer intern, I worked closely with the head of the
              department on software development projects related to clinical
              health outcomes.
            </li>
            <li className="mb-1">
              Prototyped software applications for monitoring patients during
              health trials in health science using MySQL and SQL Server, PHP,
              Perl and C#.
            </li>
          </ul>
        </div>
      </Row>

      <h3 className="uppercase">Volunteer Work</h3>

      <Row isVCentered={false} wrap={true} className="mb-8">
        <div className="w-full md:w-2/10 text-center md:text-right text-gray-400 mb-2 md:pr-4 uppercase">
          2017 - Present
        </div>
        <section className="w-full md:w-8/10 border border-solid border-gray-200 rounded-md overflow-hidden">
          {getTitle("Team Leader, New York Cares")}
          <p className="m-3">
            I am an IRS certified volunteer tax preparer and I help low income
            New York residents prepare and file their tax returns for free
            during the tax season.
          </p>
          <ul className="m-3 list-inside list-disc">
            <li className="mb-1">
              Manage a small team of volunteers and act as a liaison between New
              York Cares and partner organizations.
            </li>
            <li className="mb-1">
              Talk with clients to understand their tax situation and assemble
              all their documents for them.
            </li>
            <li className="mb-1">
              Prepare and file federal and state tax forms for up to 200 clients
              each tax season saving clients $100,000 in preparation fees.
            </li>
            <li className="mb-1">
              Quality review tax returns for accuracy. I oversee work prepared
              by junior volunteers.
            </li>
          </ul>
        </section>
      </Row>

      <h3 className="uppercase">Education</h3>

      <Row isVCentered={false} wrap={true} className="mb-8">
        <div className="w-full md:w-2/10 text-center md:text-right text-gray-400 mb-2 md:pr-4 uppercase">
          2009
        </div>
        <div className="w-full md:w-8/10 border border-solid border-gray-200 rounded-md p-4">
          <h4>Ph.D in Mathematical Biology</h4>
          <h5>University of Warwick, UK</h5>
          <p className="m-0">
            Understanding morphogenesis in myxobacteria from a theoretical and
            experimental perspective
          </p>
        </div>
      </Row>

      <Row isVCentered={false} wrap={true} className="mb-8">
        <div className="w-full md:w-2/10 text-center md:text-right text-gray-400 mb-2 md:pr-4 uppercase">
          2005
        </div>
        <div className="w-full md:w-8/10 border border-solid border-gray-200 rounded-md p-4">
          <h4>M.Sc in Computer Science</h4>
          <h5>University of Warwick, UK</h5>
        </div>
      </Row>

      <Row isVCentered={false} wrap={true} className="mb-8">
        <div className="w-full md:w-2/10 text-center md:text-right text-gray-400 mb-2 md:pr-4 uppercase">
          2004
        </div>
        <div className="w-full md:w-8/10 border border-solid border-gray-200 rounded-md p-4">
          <h4>B.Sc in Computer Science</h4>
          <h5>University of Warwick, UK</h5>
          <p className="m-0">First-class honours</p>
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
