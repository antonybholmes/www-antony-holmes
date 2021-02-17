import React from "react"

type AltViewProps = {
  size?: string
  className?: string
  style?: any
}

const AltView: React.FC<AltViewProps> = React.forwardRef(
  ({ size, className, style, children }, ref: any) => {
    let cls1
    let cls2

    switch (size) {
      case "lg":
        cls1 = "lg:hidden"
        cls2 = "hidden lg:block"
        break
      case "xl":
        cls1 = "xl:hidden"
        cls2 = "hidden xl:block"
        break
      case "2xl":
        cls1 = "2xl:hidden"
        cls2 = "hidden 2xl:block"
        break
      default:
        cls1 = "sm:hidden"
        cls2 = "hidden sm:block"
        break
    }

    return (
      <div className={`overflow-visible ${className}`} style={style} ref={ref}>
        <div className={cls1}>{children[0]}</div>
        <div className={cls2}>{children[1]}</div>
      </div>
    )
  }
)

AltView.defaultProps = {
  className: "",
  style: {},
  size: "sm",
}

export default AltView
