import React from "react"

type ContainerProps = {
  className?: string
  style?: any
}

const ArticleContainer: React.FC<ContainerProps> = ({
  className = "",
  style = {},
  children,
}) => (
  <div className="flex flex-row justify-center">
    <div className="w-9/10 md:w-8/10 lg:w-6/10 3xl:w-4/10">{children}</div>
  </div>
)

export default ArticleContainer
