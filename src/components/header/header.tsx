import React from "react"
import Container from "../container"
import Logo from "../logo"
import { Props } from ".."
import Row from "../row"
import HeaderLinks from "./headerlinks"
import { Link } from "gatsby"

const Header = (props: Props) => {
  return (
    <header className="w-full bg-white">
      <Container>
        <Row>
          <Link to="/">
            <a>
              <Logo />
            </a>
          </Link>

          <HeaderLinks title={props.title} />
        </Row>
      </Container>
    </header>
  )
}

export default Header
