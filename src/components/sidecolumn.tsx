import React from "react"
import Column from "./column"

type SideColumnProps = {
  w?: string
  size?: string
  className?: string
  autoHide?: boolean
}

const SideColumn: React.FC<SideColumnProps> = ({
  w,
  size,
  className,
  autoHide,
  children,
}) => (
  <Column
    w={w}
    className={`${autoHide ? "hidden" : ""} ${size}:block ${className}`}
  >
    {children}
  </Column>
)

SideColumn.defaultProps = {
  size: "xl",
  w: "w-3/12",
  className: "",
  autoHide: true,
}

export default SideColumn
