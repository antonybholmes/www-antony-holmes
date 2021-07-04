import React from "react"
import Container from "../container"
import Row from "../row"
import HeaderLinks from "./headerlinks"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import getPassportPhoto from "../../utils/passportphoto"
import ShowSmall from "../showsmall"
import { useState } from "react"
import HideSmall from "../hidesmall"
import { useWindowResize } from "beautiful-react-hooks"
import MenuButton from "./menubutton"

const Header = (props: { title: string }) => {
  const [isVisible, setIsVisible] = useState(false)
  const image = getPassportPhoto()

  const _handleClick = () => {
    setIsVisible(!isVisible)
  }

  useWindowResize(() => {
    setIsVisible(false)
  })

  return (
    <header className="w-full bg-gray-700">
      <Container>
        <Row className="py-4">
          <Row>
            <ShowSmall className="mr-4">
              <MenuButton isVisible={isVisible} onClick={_handleClick} />
            </ShowSmall>
            <Link to="/" className="text-white hover:text-white-80 trans-ani">
              <Row>
                <GatsbyImage
                  image={getImage(image)}
                  alt="Antony Holmes"
                  className={`w-10 rounded-full`}
                />
                <div className="ml-4 text-sm font-semibold ">
                  antonyholmes.com
                </div>
              </Row>
            </Link>
          </Row>
          <HideSmall className="ml-8">
            <HeaderLinks title={props.title} />
          </HideSmall>
        </Row>
      </Container>
      <div className={`p-4 ${isVisible ? "block" : "hidden "}`}>
        <HeaderLinks title={props.title} rowMode={false} />
      </div>
    </header>
  )
}

export default Header
