import React from "react"
import Row from "./row"

type MainSideColProps = {
  className?: string
  cls1ext?: string
  cls2ext?: string
  isVCentered?: boolean
}

const MainSideCol: React.FC<MainSideColProps> = ({
  className,
  cls1ext,
  cls2ext,
  isVCentered,
  children,
}) => {
  return (
    <Row wrap={true} isVCentered={isVCentered} className={className}>
      <div className={`w-full xl:w-8/10 6xl:w-8/10 ${cls1ext}`}>
        {children[0]}
      </div>

      <div className={`w-full xl:w-2/10 6xl:w-2/10 ${cls2ext}`}>
        {children[1]}
      </div>
    </Row>
  )
}

MainSideCol.defaultProps = {
  isVCentered: false,
  className: "",
  cls1ext: "",
  cls2ext: "",
}

export default MainSideCol
