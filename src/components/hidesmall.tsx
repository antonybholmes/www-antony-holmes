import React from "react"

type HideSmallProps = {
  size?: string
  show?: boolean
  className?: string
  style?: any
}

const HideSmall = React.forwardRef<HideSmallProps, any>(
  (
    { size = "md", show = false, className = "", style = {}, children },
    ref: any
  ) => {
    if (show) {
      switch (size) {
        case "lg":
          className = `lg:hidden ${className}`
          break
        case "xl":
          className = `xl:hidden ${className}`
          break
        case "2xl":
          className = `2xl:hidden ${className}`
          break
        case "3xl":
          className = `3xl:hidden ${className}`
          break
        case "4xl":
          className = `4xl:hidden ${className}`
          break
        default:
          className = `sm:hidden ${className}`
          break
      }

      return (
        <div className={className} style={style} ref={ref}>
          {children}
        </div>
      )
    } else {
      switch (size) {
        case "lg":
          className = `hidden lg:block ${className}`
          break
        case "xl":
          className = `hidden xl:block ${className}`
          break
        case "2xl":
          className = `hidden 2xl:block ${className}`
          break
        case "3xl":
          className = `hidden 3xl:block ${className}`
          break
        case "4xl":
          className = `hidden 4xl:block ${className}`
          break
        default:
          className = `hidden sm:block ${className}`
          break
      }

      return (
        <div className={className} style={style} ref={ref}>
          {children}
        </div>
      )
    }
  }
)

export default HideSmall
