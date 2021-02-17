import React, { useState, useRef, useEffect } from "react"
import ColorLink from "./colorlink"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { gsap, Power3 } from "gsap"
import Row from "../row"

type IndexLinkProps = {
  to: string
  color: string
  className?: string
}

const IndexLink: React.FC<IndexLinkProps> = ({
  to,
  color,
  className,
  children,
}) => {
  const [hover, setHover] = useState(false)

  const iconEl = useRef(null)

  // useEffect(() => {
  //   gsap
  //     .timeline()
  //     .to(
  //       iconEl.current,
  //       { marginLeft: hover ? "0.25rem" : "0", ease: Power3.easeOut, duration: 0.4 },
  //       0
  //     )
  // }, [hover])

  const onMouseEnter = (e: any) => {
    setHover(true)

    gsap
      .timeline()
      .to(
        iconEl.current,
        { x: "0.3rem", ease: "back.out(2)", duration: 0.4 },
        0
      )
  }

  const onMouseLeave = (e: any) => {
    setHover(false)

    gsap
      .timeline()
      .to(iconEl.current, { x: 0, ease: "back.out(2)", duration: 0.4 }, 0)
  }

  let chevronColor

  switch (color) {
    case "red":
      chevronColor = "text-red-500"
      break
    case "blue":
      chevronColor = "text-blue-500"
      break
    case "white":
      chevronColor = "text-white-98"
      break
    default:
      chevronColor = "text"
      break
  }

  return (
    <Row onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <ColorLink color={color} to={to} className={className}>
        {children}
      </ColorLink>

      <div ref={iconEl} className="ml-2">
        <FontAwesomeIcon icon="chevron-right" className={`${chevronColor}`} />
      </div>
    </Row>
  )
}

IndexLink.defaultProps = {
  className: "",
}

export default IndexLink
