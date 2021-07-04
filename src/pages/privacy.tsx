import React from "react"
import ColorLink from "../components/links/colorlink"
import ArticleLayout from "../components/layouts/articleLayout"
import getSiteMetadata from "../utils/sitemetadata"

//nav="About"

const PrivacyPage = () => {
  const { siteName } = getSiteMetadata()

  return (
    <ArticleLayout title="Privacy Policy">
      <h1>Privacy Policy</h1>
      <h4 className="mb-4">Last updated on June 30, 2021</h4>
      <p>
        {siteName} takes your privacy seriously. I collect as little information
        about you as possible. Such data that I might collect, I will not sell,
        lease, exchange, or otherwise share with third parties in ways other
        than described in this Privacy Policy. If you have additional questions
        or require more information about our Privacy Policy, do not hesitate to
        contact me.
      </p>

      <h2 className="mt-8">Consent</h2>
      <p>
        By using my website, you hereby consent to my Privacy Policy and agree
        to its terms.
      </p>

      <h2 className="mt-8">Cookies</h2>
      <p>
        Like other websites, this site uses 'cookies' via some third party
        services. These cookies are used to store information including the
        pages on the website that the visitor accessed or visited. For more
        general information on cookies, please read{" "}
        <ColorLink
          color="blue"
          to="https://www.cookieconsent.com/what-are-cookies/"
        >
          What Are Cookies
        </ColorLink>
        .
      </p>
      <h2 className="mt-8">Third Party Privacy Policies</h2>
      <p>
        {siteName}'s Privacy Policy does not apply to other websites. Thus, we
        are advising you to consult the respective Privacy Policies of these
        third-parties for more detailed information. It may include their
        practices and instructions about how to opt-out of certain options.
      </p>
      <p>
        You can choose to disable cookies through your individual browser
        options. To know more detailed information about cookie management with
        specific web browsers, it can be found at the browsers' respective
        websites.
      </p>
      <p>
        Note that I have no access or control over cookies that are used by
        third-party services.
      </p>
      {/* <h2>Children's Information</h2>

          <p>
            Another part of our priority is adding protection for children while
            using the internet. We encourage parents and guardians to observe,
            participate in, and/or monitor and guide their online activity.
          </p>

          <p>
            Institute for Cancer Genetics does not knowingly collect any
            Personal Identifiable Information.
            If you think that your child provided this kind of information on
            our website, we strongly encourage you to contact us immediately and
            we will do our best efforts to promptly remove such information from
            our records.
          </p> */}

      <h2 className="mt-8">What data do you collect about me and why?</h2>
      <p>
        When you visit this site I may use cookies, server logs, and other
        methods to collect anonymous data about what pages you visit and when.
      </p>

      <h2 className="mt-8">Do you share data with others?</h2>
      <p>
        I do not collect or give information about you to other companies or
        services. However, I do use services from other companies to provide
        this site. The companies behind those services may collect data about
        you on their own, for their own purposes. Some of these services may be
        used to collect information about your online activities across
        different websites. All of these services are based in the United
        States.
      </p>

      <table className="bg-white w-full mt-4 text-sm">
        <thead>
          <tr className="font-medium">
            <th className="py-2">Service</th>
            <th className="py-2">Privacy Notice</th>
            <th className="py-2">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2">
              <ColorLink color="blue" to="https://analytics.google.com/">
                Google Analytics
              </ColorLink>
            </td>
            <td className="py-2">
              <ColorLink
                color="blue"
                to="https://www.google.com/analytics/terms"
              >
                https://www.google.com/analytics/terms
              </ColorLink>
            </td>
            <td className="py-2">Compiles visitor statistics.</td>
          </tr>
          <tr>
            <td className="py-2">
              <ColorLink color="blue" to="https://fonts.google.com/">
                Google Fonts
              </ColorLink>
            </td>
            <td className="py-2">
              <ColorLink
                color="blue"
                to="https://developers.google.com/fonts/faq"
              >
                https://developers.google.com/fonts/faq
              </ColorLink>
            </td>
            <td className="py-2">Hosts font files used to theme this site.</td>
          </tr>
          <tr>
            <td className="py-2">
              <ColorLink color="blue" to="https://aws.amazon.com/">
                Amazon Web Services
              </ColorLink>
            </td>
            <td className="py-2">
              <ColorLink color="blue" to="https://aws.amazon.com/privacy">
                https://aws.amazon.com/privacy
              </ColorLink>
            </td>
            <td className="py-2">
              Provides cloud servers and services for running this website.
            </td>
          </tr>

          {/* <tr>
              <td className="py-2 border">
                <ColorLink color="blue" to="https://github.com/">
                  GitHub
                </ColorLink>
              </td>
              <td className="py-2 border">
                <ColorLink
                  color="blue"
                  to="https://help.github.com/privacy-policy"
                >
                  https://help.github.com/privacy-policy
                </ColorLink>
              </td>
              <td className="py-2 border">Hosts source code.</td>
            </tr> */}
        </tbody>
      </table>
    </ArticleLayout>
  )
}

export default PrivacyPage
