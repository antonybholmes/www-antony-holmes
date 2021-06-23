import React from "react"
import Container from "../container"
import Logo from "../../../assets/images/svg/logo.svg"
import Row from "../row"
import HeaderLinks from "./headerlinks"
import { Link } from "gatsby"

const Header = (props: { title: string }) => {
  return (
    <header className="w-full bg-white">
      <Container>
        <Row className="py-4 border-b border-solid border-gray-200 justify-between">
          <Link to="/">
            <img src={Logo} className="h-10" />
          </Link>

          <HeaderLinks title={props.title} />
        </Row>
      </Container>
    </header>
  )
}

export default Header
