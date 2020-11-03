import React from "react"

type FullDivProps = {
  className?: string
  children?: any
}

const FullDiv: React.FC<FullDivProps> = ({ className, children }) => (
  <div className={`w-full ${className}`}>{children}</div>
)

FullDiv.defaultProps = {
  className: "",
}

export default FullDiv
