import React from "react"
import BlueLink from "../components/links/bluelink"
import MainSideCol from "../components/mainsidecol"
import useSiteMetadata from "../hooks/sitemetadata"
import PageLayout from "../components/pagelayout"
import { PageProps } from "gatsby"

//nav="About"

const TermsPage: React.FC<PageProps> = ({ path }) => {
  const { siteTitle } = useSiteMetadata()

  return (
    <PageLayout title="Terms of Use" path={path}>
      <MainSideCol>
        <>
          <h1>{siteTitle} Website Terms of Use</h1>
          <h2 className="mt-8 uppercase">
            Ownership of Site and Agreement to Terms of Use
          </h2>
          <p>
            These Terms and Conditions of Use (the "Terms of Use") apply to the{" "}
            {siteTitle} website (the "Site"). The Site is the property of the{" "}
            {siteTitle}. BY USING THE SITE, YOU AGREE TO THESE TERMS OF USE; IF
            YOU DO NOT AGREE, DO NOT USE THE SITE.
          </p>
          <p>
            The {siteTitle} reserves the right, at its sole discretion, to
            change, modify, add or remove portions of these Terms of Use, at any
            time. It is your responsibility to check these Terms of Use
            periodically for changes. Your continued use of the Site following
            the posting of changes will mean that you accept and agree to the
            changes. As long as you comply with these Terms of Use, we grant you
            a personal, non-exclusive, non-transferable, limited privilege to
            enter and use the Site.
          </p>
          <h2 className="mt-8 uppercase">Investing, Advice, And Content</h2>
          <p></p>The content, courses and materials The {siteTitle} provides is
          published generally and DOES NOT constitute financial, legal, or tax
          advice. The content and materials are not personal to you and does not
          take into account your personal circumstances. The {siteTitle}
          does not assess the suitability or appropriateness of any investment
          in light of your personal circumstances, including your knowledge and
          understanding, financial strength, tax liability or appetite for risk.
          <p>
            The {siteTitle} does not act as an investment advisor or advocate
            the purchase or sale of any security or investment. If you need
            guidance on interpreting the materials and content on the Website
            given your personal circumstances, you should seek independent
            advice from appropriate qualified professionals.{" "}
          </p>
          <p>
            Investment markets have inherent risks and there is no guarantee of
            future profits, or even a return of your investment. Past
            performances does not assure future results. Investors must be able
            to afford to lose their entire investment. Specifically, certain
            investments are only for accredited investors who are familiar with
            and willing to accept the high risk associated with private
            investments. Securities sold through private placements are not
            publicly traded and, therefore, are less liquid, and may be subject
            to holding period requirements.{" "}
          </p>
          <p>
            The information generally available on the Website DOES NOT
            constitute recommendations, solicitations, or offers to buy or sell
            any securities, options, other financial instruments or other
            assets, or provide any investment advice or service. The content and
            materials The {siteTitle} provides is for general information only
            and is not intended to be relied upon by users in making (or not
            making) certain investment decisions. The {siteTitle} tries to
            ensure that the content and materials are up to date and accurate,
            but the {siteTitle} does not guarantee the accuracy of the
            information. Users are encouraged to perform their own research,
            investigation and due diligence.
          </p>
          <h2 className="mt-8 uppercase">Content</h2>
          <p>
            All text, graphics, user interfaces, visual interfaces, photographs,
            trademarks, logos, artwork and computer code (collectively,
            "Content"), including but not limited to the design, structure,
            selection, coordination, expression, "look and feel" and arrangement
            of such Content, contained on the Site is owned, controlled or
            licensed by or to the {siteTitle}, and is protected by trade dress,
            copyright, patent and trademark laws, and various other intellectual
            property rights and unfair competition laws.
          </p>
          <p>
            Except as expressly provided in these Terms of Use, no part of the
            Site and no Content may be copied, reproduced, republished,
            uploaded, posted, publicly displayed, encoded, translated,
            transmitted or distributed in any way (including "mirroring") to any
            other computer, server, Web site or other medium for publication or
            distribution or for any commercial enterprise, without the
            Institute’s express prior written consent. You may use information
            from the Site, provided that you (1) not remove any proprietary
            notice language in all copies of such documents, (2) use such
            information only for your personal, non-commercial informational
            purpose and do not copy or post such information on any networked
            computer or broadcast it in any media, (3) make no modifications to
            any such information, and (4) not make any additional
            representations relating to such documents.
          </p>
          <h2 className="mt-8 uppercase">Your Use of the Site</h2>
          <p>
            You may not attempt to gain unauthorized access to any portion or
            feature of the Site, or any other systems or networks connected to
            the Site or to any Institute server, or to any of the services
            offered on or through the Site, by hacking, password "mining" or any
            other illegitimate means.
          </p>
          <p>
            You may not probe, scan or test the vulnerability of the Site or any
            network connected to the Site, nor breach the security or
            authentication measures on the Site or any network connected to the
            Site.
          </p>
          <p>
            You agree that you will not take any action that imposes an
            unreasonable or disproportionately large load on the infrastructure
            of the Site, or any systems or networks connected to the Site or to
            the Institute.
          </p>
          <p>
            You agree not to use any device, software or routine to interfere or
            attempt to interfere with the proper working of the Site or with any
            other person’s use of the Site.
          </p>
          <h2 className="mt-8 uppercase">Links to Other Sites</h2>
          <p>
            This Site may contain links to other independent third-party Web
            sites ("Linked Sites"). These Linked Sites are provided solely as a
            convenience to our visitors. Such Linked Sites are not under the
            Institute's control, and we are not responsible for and does not
            endorse the content of such Linked Sites, including any information
            or materials contained on such Linked Sites. You will need to make
            your own independent judgment regarding your interaction with these
            Linked Sites.
          </p>
          <h2 className="mt-8 uppercase">Privacy</h2>
          <p>
            The {siteTitle}'s Privacy Policy applies to use of this Site, and
            its terms are made a part of these Terms of Use by this reference.
            To view the {siteTitle}' Privacy Policy,{" "}
            <BlueLink to="/privacy">click here</BlueLink>. Additionally, by
            using the Site, you acknowledge and agree that Internet
            transmissions are never completely private or secure. You understand
            that any message or information you send to the Site may be read or
            intercepted by others, even if there is a special notice that a
            particular transmission is encrypted.
          </p>
          <h2 className="mt-8 uppercase">Disclaimers</h2>
          <p>
            THE POLITE INVESTOR DOES NOT PROMISE THAT THE SITE OR ANY CONTENT,
            SERVICE OR FEATURE OF THE SITE WILL BE ERROR-FREE OR UNINTERRUPTED,
            OR THAT ANY DEFECTS WILL BE CORRECTED, OR THAT YOUR USE OF THE SITE
            WILL PROVIDE SPECIFIC RESULTS. THE SITE AND ITS CONTENT ARE
            DELIVERED ON AN "AS-IS" AND "AS-AVAILABLE" BASIS. ALL INFORMATION
            PROVIDED ON THE SITE IS SUBJECT TO CHANGE WITHOUT NOTICE. THE POLITE
            INVESTOR CANNOT ENSURE THAT ANY FILES OR OTHER DATA YOU DOWNLOAD
            FROM THE SITE WILL BE FREE OF VIRUSES OR CONTAMINATION OR
            DESTRUCTIVE FEATURES. THE POLITE INVESTOR DISCLAIMS ALL WARRANTIES,
            EXPRESS OR IMPLIED, INCLUDING ANY WARRANTIES OF ACCURACY,
            NON-INFRINGEMENT, MERCHANTABILITY AND FITNESS FOR A PARTICULAR
            PURPOSE. THE POLITE INVESTOR DISCLAIMS ANY AND ALL LIABILITY FOR THE
            ACTS, OMISSIONS AND CONDUCT OF ANY THIRD PARTIES IN CONNECTION WITH
            OR RELATED TO YOUR USE OF THE SITE. YOU ASSUME TOTAL RESPONSIBILITY
            FOR YOUR USE OF THE SITE AND ANY LINKED SITES. YOUR SOLE REMEDY
            AGAINST THE POLITE INVESTOR FOR DISSATISFACTION WITH THE SITE OR ANY
            CONTENT IS TO STOP USING THE SITE OR ANY SUCH CONTENT. THIS
            LIMITATION OF RELIEF IS A PART OF THE BARGAIN BETWEEN THE PARTIES.
          </p>
          <p>
            The above disclaimer applies to any damages, liability or injuries
            caused by any failure of performance, error, omission, interruption,
            deletion, defect, delay in operation or transmission, computer
            virus, communication line failure, theft or destruction of or
            unauthorized access to, alteration of, or use, whether for breach of
            contract, tort, negligence or any other cause of action.
          </p>
          <p>
            The Institute reserves the right to do any of the following, at any
            time, without notice: (1) to modify, suspend or terminate operation
            of or access to the Site, or any portion of the Site, for any
            reason; (2) to modify or change the Site, or any portion of the
            Site, and any applicable policies or terms; and (3) to interrupt the
            operation of the Site, or any portion of the Site, as necessary to
            perform routine or non-routine maintenance, error correction, or
            other changes.
          </p>
          <h2 className="mt-8 uppercase">Indemnity</h2>
          <p>
            You shall indemnify, defend and hold harmless the Institute and its
            officers, directors and employees, from and against all third party
            claims, losses, damages, costs and liabilities, including reasonable
            attorneys’ fees, arising out of or relating to your use of the
            Website, your use of the Services, your Content, or any products or
            services offered by you to a third party, or obtained by you from a
            third party, via the Site.
          </p>
          <h2 className="mt-8 uppercase">Limited Liability</h2>
          <p>
            THE POLITE INVESTOR’S AGGREGATE LIABILITY FOR ALL CLAIMS, LOSSES,
            LIABILITIES OR DAMAGES IN CONNECTION WITH THIS AGREEMENT, YOUR
            ACCESS TO OR USE OF, OR YOUR INABILITY TO ACCESS OR USE, THE WEBSITE
            OR ANY SOFTWARE, SERVICES OR CONTENT ON THE WEBSITE, WHETHER AS A
            RESULT OF BREACH OF CONTRACT, TORT (INCLUDING NEGLIGENCE) OR
            OTHERWISE, REGARDLESS OF THE THEORY OF LIABILITY, IS LIMITED TO NO
            MORE THAN THE LESSER OF (A) THE TOTAL FEES PAID BY YOU IN THE
            THEN-CURRENT MONTH OR (B) ONE HUNDRED DOLLARS (US $100).
          </p>
          <p>
            IN ADDITION, THE POLITE INVESTOR WILL NOT UNDER ANY CIRCUMSTANCES BE
            LIABLE FOR LOST PROFITS, CONSEQUENTIAL, INDIRECT, PUNITIVE,
            EXEMPLARY OR SPECIAL DAMAGES.
          </p>
          {/* <h2 className="mt-8 uppercase">Governing Law</h2>
              <p>
                This Agreement shall be governed and construed in accordance
                with the laws of the State of New York without giving effect to
                conflict of law principles. You and the Institute agree to
                submit to the personal and exclusive jurisdiction of the state
                and federal courts located within New York for the purpose of
                litigating all disputes.
              </p> */}
        </>
        <></>
      </MainSideCol>
    </PageLayout>
  )
}

export default TermsPage
