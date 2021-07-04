import React from "react"

type ContainerProps = {
  className?: string
  style?: any
}

const Container: React.FC<ContainerProps> = ({
  className = "",
  style = {},
  children,
}) => (
  // <div className={`container px-4 mx-auto ${className}`} style={style}>
  //   {children}
  // </div>
  <div className={`flex flex-row justify-center ${className}`} style={style}>
    <div className="w-9/10 lg:w-8/10 xl:w-7/10">{children}</div>
  </div>
)

export default Container
