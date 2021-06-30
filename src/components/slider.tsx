import React, { useState, useRef, useEffect, useCallback } from "react"
import { gsap } from "gsap"

const D = 20
const R = D / 2

type SliderProps = {
  value?: any
  min?: number
  max?: number
  step?: number
  onChange?: any
  className?: string
}

const Slider: React.FC<SliderProps> = ({
  value = 10,
  min = 1,
  max = 100,
  step = 1,
  onChange = null,
  className = "",
}) => {
  const barRef = useRef(null)
  const slideRef = useRef(null)
  const handleRef = useRef(null)
  const handleHighlightRef = useRef(null)
  const [pc, setPC] = useState(0)
  const [mouseX, setMouseX] = useState(-1)
  const [hasFocus, setHasFocus] = useState(false)
  const mouseXRef = React.useRef(mouseX)
  const [_value, _setValue] = useState(value)

  const range = max - min
  const _inc = step / range

  useEffect(() => {
    window.addEventListener("mousemove", _handleMouseMove)
    window.addEventListener("mouseup", _handleMouseUp)

    // cleanup this component
    return () => {
      window.removeEventListener("mousemove", _handleMouseMove)
      window.removeEventListener("mouseup", _handleMouseUp)
    }
  }, [])

  useEffect(() => {
    _setValue(value)
  }, [value])

  useEffect(() => {
    setPC((_value / range) * 100)

    // if (onChange !== null) {
    //     onChange(_value)
    // }
  }, [_value])

  useEffect(() => {
    slideRef.current.style.width = `${pc}%` //`calc(${pc}% - ${R}px)`
    handleRef.current.style.left = `calc(${pc}% - ${R}px)`
    handleHighlightRef.current.style.left = handleRef.current.style.left
  }, [pc])

  useEffect(() => {
    gsap.to(handleHighlightRef.current, {
      duration: 0.4,
      ease: "back.out(2)",
      scale: hasFocus ? 1.6 : 1,
    })

    if (hasFocus) {
      gsap.to(handleHighlightRef.current, {
        delay: 5,
        duration: 0.4,
        ease: "back.out(2)",
        scale: 1,
      })
    }
  }, [hasFocus])

  const _onChange = (v: number) => {
    if (onChange !== null) {
      onChange(Math.max(min, Math.min(max, Math.round(v))))
    }
  }

  const _setMouseX = (x: number) => {
    mouseXRef.current = x
    setMouseX(x)
  }

  const _handleMouseDown = (e: any) => {
    _setMouseX(e.clientX - barRef.current.getBoundingClientRect().left)
    _handleMouseMove(e)
  }
  const _handleMouseUp = (e: any) => {
    _setMouseX(-1)
  }

  const _handleMouseMove = (e: any) => {
    if (mouseXRef.current > 1) {
      const p = Math.max(
        0,
        Math.min(
          1,
          (e.clientX - barRef.current.getBoundingClientRect().left) /
            barRef.current.getBoundingClientRect().width
        )
      )
      const v = p * max

      _onChange(v)
    }
  }

  const _handleFocus = () => {
    setHasFocus(true)
  }

  const _handleBlur = () => {
    setHasFocus(false)
  }

  const _handleKeyDown = (e: any) => {
    if (hasFocus) {
      switch (e.key) {
        case "ArrowUp":
        case "ArrowLeft":
          _onChange(_value - _inc)
          break
        case "ArrowDown":
        case "ArrowRight":
          _onChange(_value + _inc)
          break
      }
    }
  }

  return (
    <div
      ref={barRef}
      className={`relative flex flex-row items-center ${className}`}
      style={{ height: `${D}px`, marginLeft: `${R}px`, marginRight: `${R}px` }}
      onMouseDown={_handleMouseDown}
      onFocus={_handleFocus}
      onBlur={_handleBlur}
      onKeyDown={_handleKeyDown}
      tabIndex={0}
    >
      <div className="absolute w-full rounded-full bg-gray-300 h-1">
        <div
          ref={slideRef}
          className="absolute left-0 w-0 h-full bg-blue-600 rounded-full"
        />
      </div>

      <div
        ref={handleHighlightRef}
        className="absolute left-0 bg-blue-600 rounded-full opacity-20"
        style={{ width: `${D}px`, height: `${D}px` }}
      />

      <div
        ref={handleRef}
        className={`absolute left-0 bg-white border-solid border border-gray-400 rounded-full cursor-pointer ${
          hasFocus ? "shadow" : ""
        }`}
        style={{ width: `${D}px`, height: `${D}px` }}
        onMouseDown={_handleMouseDown}
        onMouseUp={_handleMouseUp}
      />
    </div>
  )
}

export default Slider
