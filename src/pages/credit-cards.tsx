import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { PageProps } from "gatsby"
import React from "react"
import Container from "../components/container"
import PageLayout from "../components/layouts/pagelayout"
import BlueLink from "../components/links/bluelink"
import ColorLink from "../components/links/colorlink"
import Row from "../components/row"
import getCreditCards from "../utils/creditcards"

const starRating = (rating: number) => {
  const n = Math.floor(rating)

  const stars = []

  for (let i = 0; i < n; ++i) {
    stars.push(
      <FontAwesomeIcon
        icon={["fas", "star"]}
        size="lg"
        className="text-green-600 mr-1"
      />
    )
  }

  if (rating > n) {
    stars.push(
      <FontAwesomeIcon
        icon={["fas", "star-half-alt"]}
        size="lg"
        className="text-green-600"
      />
    )
  }

  // Pad so each is 5 stars in length
  while (stars.length < 5) {
    stars.push(
      <FontAwesomeIcon
        icon={["far", "star"]}
        size="lg"
        className="text-green-600"
      />
    )
  }

  return (
    <Row className="my-2">
      <div className="font-semibold text-lg mr-2">{rating}</div>
      {stars}
    </Row>
  )
}

const Page: React.FC<PageProps> = () => {
  const allcards = getCreditCards()

  return (
    <PageLayout title="Credit Cards">
      <Container>
        <h1>Credit Cards</h1>

        <h3>
          Reviews of credit cards. These are all credit cards I either own or
          have used.
        </h3>

        {allcards.map(
          (
            cardgroup: {
              name: string
              description: string
              cards: Array<{
                name: string
                description: string
                rating: number
                fee: string
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
                      rating: number
                      fee: string
                      url: string
                      pros: Array<string>
                      cons: Array<string>
                    },
                    cardIndex: number
                  ) => {
                    return (
                      <section key={cardIndex} className="mb-12 ">
                        <section className="">
                          <Row wrap={true} className="justify-between mb-4">
                            <h3 className="m-0 font-semibold">
                              <ColorLink to={card.url}>{card.name}</ColorLink>
                            </h3>

                            {starRating(card.rating)}
                          </Row>

                          <p>{card.description}</p>
                        </section>

                        <div className="rounded-md overflow-hidden">
                          <section className="p-4 bg-gray-200">
                            <div>Annual fee: {card.fee}</div>
                          </section>

                          <section>
                            <Row
                              wrap={true}
                              isVCentered={false}
                              className="bg-gray-100 p-4"
                            >
                              <section className="w-full lg:w-1/2 p-4">
                                <Row
                                  isCentered={true}
                                  className="bg-green-500 py-3 rounded"
                                >
                                  <h5 className="m-0 mr-2 text-white">Pros</h5>
                                  <FontAwesomeIcon
                                    icon={["fas", "thumbs-up"]}
                                    className="ml-2 text-white"
                                  />
                                </Row>
                                <ul className="list-inside list-disc p-2">
                                  {card.pros.map(
                                    (pro: string, index: number) => {
                                      return <li key={index}>{pro}</li>
                                    }
                                  )}
                                </ul>
                              </section>
                              <section className="w-full lg:w-1/2 p-4">
                                <Row
                                  isCentered={true}
                                  className="bg-red-500 py-3 rounded"
                                >
                                  <h5 className="m-0 mr-2 text-white">Cons</h5>
                                  <FontAwesomeIcon
                                    icon={["fas", "thumbs-down"]}
                                    className="ml-2 text-white"
                                  />
                                </Row>

                                <ul className="list-inside list-disc p-2">
                                  {card.cons.map(
                                    (con: string, index: number) => {
                                      return <li key={index}>{con}</li>
                                    }
                                  )}
                                </ul>
                              </section>
                            </Row>
                          </section>
                        </div>
                        {/* <table className="table-fixed w-full">
                          <tr>
                            <th className="w-1/2 bg-gray-200 border border-solid border-white py-1">
                              Pros
                            </th>
                            <th className="w-1/2 bg-gray-200 border border-solid border-white py-1">
                              Cons
                            </th>
                          </tr>

                          <tr>
                            <td className="w-1/2 p-4 align-top">
                              <ul className="text-green-500">
                                {card.pros.map((pro: string, index: number) => {
                                  return <li key={index}>{pro}</li>
                                })}
                              </ul>

                              <ul className="text-red-500">
                                {card.cons.map((con: string, index: number) => {
                                  return <li key={index}>{con}</li>
                                })}
                              </ul>
                            </td>
                            <td className="w-1/2 p-4 align-top">
                              <ul className="list-inside list-disc text-red-500">
                                {card.cons.map((con: string, index: number) => {
                                  return <li key={index}>{con}</li>
                                })}
                              </ul>
                            </td>
                          </tr>
                        </table> */}
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
