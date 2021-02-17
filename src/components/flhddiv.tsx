import React from "react"

type FlHdDivProps = {
  className?: string
  children?: any
}

const FlHdDiv: React.FC<FlHdDivProps> = ({ className, children }) => (
  // <div className={`w-full pb-32 pt-40 lg:pt-56 ${className}`}>{children}</div>
  <div className={`w-full py-16 ${className}`}>{children}</div>
)

FlHdDiv.defaultProps = {
  className: "",
}

export default FlHdDiv
