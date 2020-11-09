import React from "react"
import ColorLink from "./colorlink"

type WhiteLinkProps = {
  to: string
}

const WhiteLink: React.FC<WhiteLinkProps> = ({ to, children }) => (
  <ColorLink color="white" to={to}>
    {children}
  </ColorLink>
)

export default WhiteLink
