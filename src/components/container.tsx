import React from "react"

export const CONTAINER_MARGIN_LEFT =
  "pl-2 md:pl-8 lg:pl-20 xl:pl-32 2xl:pl-40 3xl:pl-64"
export const CONTAINER_MARGIN_RIGHT =
  "pr-2 md:pr-8 lg:pr-20 xl:pr-32 2xl:pr-40 3xl:pr-64"
export const CONTAINER_MARGIN = `${CONTAINER_MARGIN_LEFT} ${CONTAINER_MARGIN_RIGHT}`

const Container = ({ className, style, children }) => (
  // <div className={`container px-4 mx-auto ${className}`} style={style}>
  //   {children}
  // </div>
  <div className={`${CONTAINER_MARGIN} ${className}`} style={style}>
    {children}
  </div>
)

Container.defaultProps = {
  className: "",
  style: {},
}

export default Container
