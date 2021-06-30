import { PageProps } from "gatsby"
import React from "react"
import Container from "../components/container"
import PageLayout from "../components/layouts/pagelayout"
import BlueLink from "../components/links/bluelink"
import useCreditCards from "../hooks/creditcards"

const Page: React.FC<PageProps> = () => {
  const allcards = useCreditCards()

  return (
    <PageLayout title="Credit Cards">
      <Container>
        <h1>Credit Cards</h1>

        <p>Reviews of credit cards.</p>

        {allcards.map(
          (
            cardgroup: {
              name: string
              description: string
              cards: Array<{
                name: string
                description: string
                url: string
                pros: Array<string>
                cons: Array<string>
              }>
            },
            cardGroupIndex: number
          ) => {
            return (
              <section key={cardGroupIndex} className="mt-24">
                <h2 className="uppercase">{cardgroup.name}</h2>

                {cardgroup.cards.map(
                  (
                    card: {
                      name: string
                      description: string
                      url: string
                      pros: Array<string>
                      cons: Array<string>
                    },
                    cardIndex: number
                  ) => {
                    return (
                      <section key={cardIndex} className="mb-16">
                        <h3>
                          <BlueLink to={card.url}>{card.name}</BlueLink>
                        </h3>

                        <p>{card.description}</p>

                        <table className="table-fixed w-full">
                          <tr>
                            <th className="w-1/2 bg-gray-200 border border-solid border-white py-2">
                              Pros
                            </th>
                            <th className="w-1/2 bg-gray-200 border border-solid border-white py-2">
                              Cons
                            </th>
                          </tr>

                          <tr>
                            <td className="w-1/2 p-4 align-top">
                              <ul className="list-inside list-disc">
                                {card.pros.map((pro: string, index: number) => {
                                  return <li key={index}>{pro}</li>
                                })}
                              </ul>
                            </td>
                            <td className="w-1/2 p-4 align-top">
                              <ul className="list-inside list-disc">
                                {card.cons.map((con: string, index: number) => {
                                  return <li key={index}>{con}</li>
                                })}
                              </ul>
                            </td>
                          </tr>
                        </table>
                      </section>
                    )
                  }
                )}
              </section>
            )
          }
        )}
      </Container>
    </PageLayout>
  )
}

export default Page
