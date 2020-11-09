import dayjs from "dayjs"
import { useStaticQuery, graphql } from "gatsby"

const useCurrentBuild = () => {
  const { currentBuildDate } = useStaticQuery(
    graphql`
      query {
        currentBuildDate {
          currentDate
        }
      }
    `
  )

  return dayjs(currentBuildDate.currentDate)
}

export default useCurrentBuild
