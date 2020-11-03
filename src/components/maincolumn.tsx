import React from "react"
import Column from "./column"

type MainColumnProps = {
  w?: string
  size?: string
  className?: string
  children: any
}

const MainColumn: React.FC<MainColumnProps> = ({
  w,
  size,
  className,
  children,
}) => (
  <Column w={w} size={size} className={className}>
    {children}
  </Column>
)

MainColumn.defaultProps = {
  size: "xl",
  w: "w-9/12",
  className: "",
}

export default MainColumn
