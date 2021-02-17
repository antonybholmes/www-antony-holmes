import React from "react"
import { Link } from "gatsby"

type LinkProps = {
  to: string
  color?: string
  color2?: string
  underlineColor?: string
  underline?: boolean
  target?: string
  aria?: string
  className?: string
  activeClassName?: string
}

const ColorLink: React.FC<LinkProps> = ({
  to,
  color,
  color2,
  underlineColor,
  underline,
  target,
  aria,
  className,
  activeClassName,
  children,
}) => {
  if (color2 === "") {
    color2 = color
  }

  if (underlineColor === "") {
    underlineColor = color2
  }

  let cls

  switch (color) {
    case "red":
      cls = "text-red-500"
      break
    case "blue":
      cls = "text-blue-500"
      break
    case "white":
      cls = "text-white-98"
      break
    case "gray":
      cls = "text-default-gray"
      break
    case "default":
      cls = "text-default-color"
      break
    default:
      cls = color
      break
  }

  // Allow switching between colors e.g. gray to blue.
  if (color2 !== "") {
    switch (color2) {
      case "red":
        cls = `${cls} hover:text-red-500`
        break
      case "blue":
        cls = `${cls} hover:text-blue-500`
        break
      case "white":
        cls = `${cls} hover:text-white-98`
        break
      case "gray":
        cls = `${cls} hover:text-default-gray`
        break
      case "default":
        cls = `${cls} hover:text-default-color`
        break
      default:
        cls = `${cls} hover:${color2}`
        break
    }
  }

  if (underline) {
    cls = `${cls} border-b border-solid border-transparent trans-ani`

    switch (underlineColor) {
      case "red":
        cls = `${cls} hover:border-red-500`
        break
      case "blue":
        cls = `${cls} hover:border-blue-500`
        break
      case "gray":
        cls = `${cls} hover:border-default-gray`
        break
      case "white":
        cls = `${cls} hover:border-white-98`
        break
      case "default":
        cls = `${cls} hover:border-default-color`
        break
      default:
        cls = `${cls} hover:${color2.replace("text", "border")}`
        break
    }
  }

  if (to === null || to === undefined) {
    to = ""
  }

  // Determine if link appears to be to an external site or not
  const isExt =
    !to.startsWith("/") || to.startsWith("http") || to.startsWith("www")

  if (isExt) {
    return (
      <a
        href={to}
        aria-label={aria}
        target={target}
        className={`${cls} ${className}`}
      >
        {children}
      </a>
    )
  } else {
    return (
      <Link
        to={to}
        aria-label={aria}
        className={`${cls} ${className}`}
        activeClassName={activeClassName}
      >
        {children}
      </Link>
    )
  }
}

ColorLink.defaultProps = {
  color: "",
  color2: "",
  underlineColor: "",
  className: "",
  activeClassName: "",
  underline: true,
  target: "_blank",
  aria: "",
}

export default ColorLink
