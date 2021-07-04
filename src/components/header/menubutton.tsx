import React from "react"
import { useEffect } from "react"
import { gsap } from "gsap"

const DURATION = 0.3
const BAR_WIDTH = "0.1rem"

type MenuButtonProps = {
  isVisible: boolean
  onClick: any
}

const MenuButton: React.FC<MenuButtonProps> = ({ isVisible, onClick }) => {
  useEffect(() => {
    let t1 = gsap.timeline()

    if (isVisible) {
      t1.to(
        "#bar1",
        {
          top: "50%",
          duration: DURATION,
          ease: "power3.out",
        },
        0
      )
        .to(
          "#bar3",
          {
            top: "50%",
            duration: DURATION,
            ease: "power3.out",
          },
          0
        )
        .to(
          "#bar2",
          {
            opacity: 0,
            duration: DURATION,
            ease: "power3.out",
          },
          0
        )
        .to(
          "#bar1",
          {
            rotate: 45,
            duration: DURATION,
            ease: "power3.out",
          },
          DURATION
        )
        .to(
          "#bar3",
          {
            rotate: -45,
            duration: DURATION,
            ease: "power3.out",
          },
          DURATION
        )
        .pause()
    } else {
      t1.to(
        "#bar1",
        {
          rotate: 0,
          duration: DURATION,
          ease: "power3.out",
        },
        0
      )
        .to(
          "#bar3",
          {
            rotate: 0,
            duration: DURATION,
            ease: "power3.out",
          },
          0
        )
        .to(
          "#bar1",
          {
            top: 0,
            duration: DURATION,
            ease: "power3.out",
          },
          DURATION
        )
        .to(
          "#bar3",
          {
            top: "100%",
            duration: DURATION,
            ease: "power3.out",
          },
          DURATION
        )
        .to(
          "#bar2",
          {
            opacity: 1,
            duration: DURATION,
            ease: "power3.out",
          },
          DURATION
        )
        .pause()
    }

    t1.play()
  }, [isVisible])

  return (
    <button onClick={onClick} className="px-4">
      <div className="relative h-5 w-6">
        <div
          id="bar1"
          className="absolute left-0 w-full bg-white"
          style={{ height: BAR_WIDTH }}
        />
        <div
          id="bar2"
          className="absolute left-0 top-1/2 w-full bg-white"
          style={{ height: BAR_WIDTH }}
        />
        <div
          id="bar3"
          className="absolute left-0 bottom-0 w-full bg-white"
          style={{ height: BAR_WIDTH, top: "100%" }}
        />
      </div>
    </button>
  )
}

export default MenuButton
