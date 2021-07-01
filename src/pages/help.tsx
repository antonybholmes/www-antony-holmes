import React from "react"
import Row from "../components/row"
import getSiteMetadata from "../utils/sitemetadata"

import gatsbysvg from "../../assets/images/svg/gatsby.svg"
//import mariadbsvg from "../assets/svg/maria-db.svg"
import npmsvg from "../../assets/images/svg/npm-logo-black.svg"
import githubsvg from "../../assets/images/svg/github.svg"
import htmlsvg from "../../assets/images/svg/html5.svg"
import jssvg from "../../assets/images/svg/javascript-shield.svg"
import reactsvg from "../../assets/images/svg/react.svg"
import ExtLink from "../components/links/extlink"
import MainSideCol from "../components/mainsidecol"
import PageLayout from "../components/layouts/pagelayout"
import { PageProps } from "gatsby"

const LOGO_CLASS = "h-10 xl:inline mx-8 mb-8"

const HelpPage: React.FC<PageProps> = ({ path }) => {
  const { copyright, version } = getSiteMetadata()

  return (
    <PageLayout title="Help" path={path}>
      <MainSideCol>
        <>
          <h4 className="font-semibold">About the {copyright} Web Site</h4>
          {/* <OutlineCard className="mt-8" autoHide={false}> */}
          <table className="w-full">
            <tbody>
              <tr>
                <td className="py-2 lg:w-2/10">Version</td>
                <td className="py-2">{version}</td>
              </tr>
              {/* <tr>
                <td className="py-2 lg:w-2/10">Last updated</td>
                <td className="py-2">{currentDate.format("DD MMM, YYYY")}</td>
              </tr> */}
            </tbody>
          </table>
          {/* </OutlineCard> */}

          {/* <OutlineCard className="mt-8" autoHide={false}> */}
          <div className="my-8">
            This web site was developed using the following technologies:
          </div>

          <Row className="xl:justify-center">
            <div>
              <ul className="xl:inline">
                <li className="xl:inline">
                  <ExtLink to="https://www.npmjs.com/">
                    <img src={npmsvg} className={LOGO_CLASS} alt="NPM logo" />
                  </ExtLink>
                </li>
                <li className="lg:inline">
                  <ExtLink to="https://reactjs.org/">
                    <img
                      src={reactsvg}
                      className={LOGO_CLASS}
                      alt="React logo"
                    />
                  </ExtLink>
                </li>
                <li className="lg:inline">
                  <ExtLink to="https://www.gatsbyjs.org">
                    <img
                      src={gatsbysvg}
                      className={LOGO_CLASS}
                      alt="Gatsby logo"
                    />
                  </ExtLink>
                </li>
                <li className="lg:inline">
                  <ExtLink to="https://www.w3.org/html/">
                    <img
                      src={htmlsvg}
                      className={LOGO_CLASS}
                      alt="HTML5 logo"
                    />
                  </ExtLink>
                </li>
                <li className="lg:inline">
                  <ExtLink to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/">
                    <img src={jssvg} className={LOGO_CLASS} alt="JS logo" />
                  </ExtLink>
                </li>
                <li className="lg:inline">
                  <ExtLink to="https://github.com/">
                    <img
                      src={githubsvg}
                      className={LOGO_CLASS}
                      alt="GitHub logo"
                    />
                  </ExtLink>
                </li>
              </ul>
            </div>
          </Row>
        </>
        <></>
      </MainSideCol>
    </PageLayout>
  )
}

export default HelpPage
