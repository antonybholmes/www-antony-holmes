import React from "react"
import ColorLink from "./colorlink"

type LinkProps = {
  to: string
  underline?: boolean
  className?: string
  activeClassName?: string
}

const BlueLink: React.FC<LinkProps> = ({
  to,
  underline = false,
  className = "",
  activeClassName = "",
  children,
}) => (
  <ColorLink
    color="blue"
    to={to}
    underline={underline}
    className={className}
    activeClassName={activeClassName}
  >
    {children}
  </ColorLink>
)

export default BlueLink
