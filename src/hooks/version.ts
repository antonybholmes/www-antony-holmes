import useCurrentBuild from "./currentbuild"
import useEpoch from "./epoch"

const useVersion = () => {
  const currentDate = useCurrentBuild()
  const ep = useEpoch()

  return `${currentDate.diff(ep, "d")}.${Math.floor(
    currentDate.diff(ep, "h") / 10
  )}.${Math.floor(currentDate.diff(ep, "m") / 100)}`
}

export default useVersion
