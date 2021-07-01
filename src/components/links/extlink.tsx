import React from "react"

type ExtLinkProps = {
  to: string
  target?: string
  className?: string
}

const ExtLink: React.FC<ExtLinkProps> = ({
  to,
  target,
  className,
  children,
}) => (
  <a className={`${className}`} href={to} target={target}>
    {children}
  </a>
)

ExtLink.defaultProps = {
  target: "_blank",
  className: "",
}

export default ExtLink
