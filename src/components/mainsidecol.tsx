import React from "react"
import Row from "./row"

type MainSideColProps = {
  className?: string
  cls1?: string
  cls2?: string
  cls1ext?: string
  cls2ext?: string
  isVCentered?: boolean
}

const MainSideCol: React.FC<MainSideColProps> = ({
  className,
  cls1,
  cls2,
  cls1ext,
  cls2ext,
  isVCentered,
  children,
}) => {
  return (
    <Row wrap={true} isVCentered={isVCentered} className={className}>
      <div className={`${cls1} ${cls1ext}`}>{children[0]}</div>

      <div className={`${cls2} ${cls2ext}`}>{children[1]}</div>
    </Row>
  )
}

MainSideCol.defaultProps = {
  isVCentered: false,
  cls1: "w-full xl:w-8/10",
  cls2: "hidden xl:block w-full xl:w-2/10",
  className: "",
  cls1ext: "",
  cls2ext: "",
}

export default MainSideCol
