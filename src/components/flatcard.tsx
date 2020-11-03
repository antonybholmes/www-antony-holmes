import React, { useState } from "react"
import StringBuffer from "../utils/stringbuffer"

type CardProps = {
  bg?: string
  hoverBg?: string
  padding?: string
  autoHide?: boolean
  showShadow?: boolean
  rounded?: boolean
  onMouseEnter?: any
  onMouseLeave?: any
  alwaysOn?: boolean
  absolute?: boolean
  className?: string
  style?: any
}

const FlatCard: React.FC<CardProps> = React.forwardRef(
  (
    {
      bg,
      hoverBg,
      padding,
      autoHide,
      showShadow,
      rounded,
      onMouseEnter,
      onMouseLeave,
      alwaysOn,
      absolute,
      className,
      style,
      children,
    },
    ref?: any
  ) => {
    const [hover, setHover] = useState(false)

    // useEffect(() => {
    //   gsap
    //   .timeline()
    //   .to(
    //     cardEl.current,
    //     0.5,
    //     { background: extZoom ? zoom : 1, ease: Power3.easeOut },
    //     0
    //   )
    // },
    // [hover])

    const mouseEnterHandler = (e: any) => {
      setHover(true)

      if (onMouseEnter !== null) {
        onMouseEnter(e)
      }
    }

    const mouseLeaveHandler = (e: any) => {
      setHover(false)

      if (onMouseLeave !== null) {
        onMouseLeave(e)
      }
    }

    const cls = new StringBuffer()
      .append(absolute ? " absolute" : " relative")
      .append(` ${padding}`)
      .append(" trans-ani")

    if (autoHide) {
      cls.append(` md:${bg}`)

      if (rounded) {
        cls.append(" md:rounded-lg")
      }

      if (hoverBg !== "") {
        cls.append(` md:hover:${hoverBg}`)
      }

      if (showShadow && bg === "bg-white") {
        cls.append(` md:shadow-flat-card`)
      }
    } else {
      cls.append(` ${bg}`)

      if (rounded) {
        cls.append(" rounded-lg")
      }

      if (hoverBg !== "") {
        cls.append(` hover:${hoverBg}`)
      }

      if (showShadow && bg === "bg-white") {
        cls.append(` shadow-flat-card`)
      }
    }

    cls.append(` ${className}`)

    return (
      <div
        ref={ref}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className={cls.toString()}
        style={style}
      >
        {children}
      </div>
    )
  }
)

FlatCard.defaultProps = {
  className: "",
  bg: "bg-white",
  hoverBg: "",
  padding: "p-4 md:p-8",
  autoHide: true,
  showShadow: true,
  rounded: false,
  alwaysOn: false,
  onMouseEnter: null,
  onMouseLeave: null,
  absolute: false,
  style: {},
}

export default FlatCard
