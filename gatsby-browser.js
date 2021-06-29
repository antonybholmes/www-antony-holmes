import "@fontsource/inter/300.css"
import "@fontsource/inter/400.css"
import "@fontsource/inter/500.css"
import "@fontsource/inter/600.css"

import "@fontsource/poppins/300.css"
import "@fontsource/poppins/400.css"
import "@fontsource/poppins/500.css"
import "@fontsource/poppins/600.css"

import "@fontsource/quicksand/300.css"
import "@fontsource/quicksand/400.css"
import "@fontsource/quicksand/500.css"
import "@fontsource/quicksand/600.css"

// normalize CSS across browsers
import "./src/normalize.scss"
// custom CSS styles
import "./src/style.scss"

// Highlighting for code blocks
import "prismjs/themes/prism.css"

import dayjs from "dayjs"
import advancedFormat from "dayjs/plugin/advancedFormat"
dayjs.extend(advancedFormat)
