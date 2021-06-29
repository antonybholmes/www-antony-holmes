import React, { useRef, useEffect } from "react"
import Row from "./row"

type TextBoxProps = {
  value?: any
  onChange?: any
  prefix?: string
  prefixLeft?: boolean
  alignLeft?: boolean
}

const TextBox: React.FC<TextBoxProps> = ({
  value,
  onChange,
  prefix,
  prefixLeft,
  alignLeft,
}) => {
  const textRef = useRef(null)

  //const [_value, _setValue] = useState(value)

  useEffect(() => {
    if (textRef && textRef.current) {
      textRef.current.value = value
    }
  }, [textRef, value])

  const handleInput = (e: any) => {
    //_setValue(e.target.value)

    if (e.key === "Enter" && onChange !== null) {
      onChange(e.target.value)
    }
  }

  return (
    <Row className="w-full bg-white rounded-md border border-solid border-gray-400 p-2">
      {prefix !== "" && prefixLeft && <div className="mr-1">{prefix}</div>}
      <div className={`w-full`}>
        <input
          type="text"
          onKeyDown={handleInput}
          className={`w-full ${alignLeft ? "" : "text-right"}`}
          ref={textRef}
        />
      </div>
      {prefix !== "" && !prefixLeft && <div className="ml-1">{prefix}</div>}
    </Row>
  )
}

TextBox.defaultProps = {
  value: 10,
  onChange: null,
  prefix: "",
  prefixLeft: true,
  alignLeft: true,
}

export default TextBox
