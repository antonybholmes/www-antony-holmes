import React from "react"

type RowProps = {
  w?: string
  size?: string
  isMobile?: boolean
  isCentered?: boolean
  isVCentered?: boolean
  wrap?: boolean
  onClick?: any
  className?: string
  style?: any
  onMouseEnter?: any
  onMouseLeave?: any
  onMouseMove?: any
  onMouseUp?: any
  onMouseDown?: any
  tabIndex?: number
}

const Row: React.FC<RowProps> = React.forwardRef(
  (
    {
      w,
      size,
      isCentered,
      isVCentered,
      wrap,
      onClick,
      className,
      style,
      onMouseEnter,
      onMouseLeave,
      onMouseMove,
      onMouseUp,
      onMouseDown,
      tabIndex,
      children,
    },
    ref: any
  ) => {
    const baseClass = `flex flex-row ${w !== "" ? `w-full ${size}:${w}` : ""} ${
      isCentered ? "justify-center" : ""
    } ${isVCentered ? "items-center" : ""} ${wrap ? "flex-wrap" : ""}`

    return (
      <div
        className={`${baseClass} ${className}`}
        style={style}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseDown={onMouseDown}
        ref={ref}
        tabIndex={tabIndex}
      >
        {children}
      </div>
    )
  }
)

Row.defaultProps = {
  w: "",
  size: "md",
  className: "",
  style: null,
  isMobile: false,
  isCentered: false,
  isVCentered: true,
  wrap: false,
  onMouseEnter: null,
  onMouseLeave: null,
  onMouseMove: null,
  onMouseUp: null,
  onMouseDown: null,
  tabIndex: undefined,
}

export default Row
