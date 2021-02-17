import React from "react"
import IndexLink from "./indexlink"

type IndexLinkProps = {
  to: string
  className?: string
}

const BlueIndexLink: React.FC<IndexLinkProps> = ({
  to,
  className,
  children,
}) => (
  <IndexLink color="blue" to={to} className={className}>
    {children}
  </IndexLink>
)

BlueIndexLink.defaultProps = {
  className: "",
}

export default BlueIndexLink
