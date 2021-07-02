import React from "react"
import HideSmall from "./hidesmall"

type ShowSmallProps = {
  size?: string
  className?: string
  style?: any
  children?: any
}

const ShowSmall: React.FC<ShowSmallProps> = ({
  size = "md",
  className = "",
  style = {},
  children,
}) => (
  <HideSmall className={className} show={true} size={size} style={style}>
    {children}
  </HideSmall>
)

export default ShowSmall
