import React from "react"

type ColumnProps = {
  w?: string
  size?: string
  isMobile?: boolean
  isCentered?: boolean
  isVCentered?: boolean
  onClick?: any
  className?: string
  style?: any
  children?: any
}

const Column: React.FC<ColumnProps> = ({
  w,
  size,
  isMobile,
  isCentered,
  isVCentered,
  onClick,
  className,
  style,
  children,
}) => {
  let baseClass = "flex"

  if (isMobile) {
    baseClass = `${baseClass} flex-row ${w !== "" ? w : ""}`
  } else {
    baseClass = `${baseClass} flex-col ${size}:flex-row w-full ${
      w !== "" ? `${size}:${w}` : ""
    }`
  }

  if (isCentered) {
    baseClass = `${baseClass} justify-center`
  }

  if (isVCentered) {
    baseClass = `${baseClass} items-center`
  }

  return (
    <div
      className={`${baseClass} ${className}`}
      style={style}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

Column.defaultProps = {
  w: "",
  size: "md",
  className: "",
  style: null,
  isMobile: false,
  isCentered: false,
  isVCentered: false,
}

export default Column
