import React from "react"
import { Link } from "gatsby"

type ColorLinkProps = {
  to: string
  color: string
  className?: string
  activeClassName?: string
}

const ColorLink: React.FC<ColorLinkProps> = ({
  to,
  color,
  className,
  activeClassName,
  children,
}) => (
  <Link
    to={to}
    className={`${color}-link ${className}`}
    activeClassName={activeClassName}
  >
    {children}
  </Link>
)

ColorLink.defaultProps = {
  className: "",
  activeClassName: "",
}

export default ColorLink
