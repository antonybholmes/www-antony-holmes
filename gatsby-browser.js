// custom typefaces
import "fontsource-inter"
// normalize CSS across browsers
import "./src/normalize.scss"
// custom CSS styles
import "./src/style.scss"

// Highlighting for code blocks
import "prismjs/themes/prism.css"

import dayjs from "dayjs"
import advancedFormat from "dayjs/plugin/advancedFormat"
dayjs.extend(advancedFormat)
