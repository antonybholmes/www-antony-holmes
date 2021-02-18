import React, { useRef, useState, useEffect } from "react"
import Row from "./row"

const LEFT_PAGE = "LEFT"
const RIGHT_PAGE = "RIGHT"
const BG_COLOR = "rgba(29, 79, 145)" //"rgba(200, 200, 200, 1)"
const BG_COLOR_2 = "rgba(29, 79, 145, 0.5)"
/**
 * Helper method for creating a range of numbers
 * range(1, 5) => [1, 2, 3, 4, 5]
 */
const range = (from: number, to: number, step: number = 1) => {
  let i = from
  const range = []

  while (i <= to) {
    range.push(i)
    i += step
  }

  return range
}

type PaginationBlockDivProps = {
  className?: string
  onClick?: any
  onMouseEnter?: any
  onMouseLeave?: any
}

const PaginationBlockDiv: React.FC<PaginationBlockDivProps> = React.forwardRef(
  ({ className, onClick, onMouseEnter, onMouseLeave, children }, ref?: any) => (
    <Row
      className={`w-8 h-8 mx-1 text-center justify-center rounded-full cursor-pointer font-medium ${className}`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={ref}
    >
      <div>{children}</div>
    </Row>
  )
)

PaginationBlockDiv.defaultProps = {
  className: "",
}

type NumberPaginationBlockDivProps = {
  page: number
  currentPage: number
}

const NumberPaginationBlockDiv: React.FC<NumberPaginationBlockDivProps> = ({
  page,
  currentPage,
  children,
}) => {
  const [hover, setHover] = useState(false)
  const blockEl = useRef(null)

  // useEffect(() => {
  //   if (page !== currentPage) {
  //     gsap
  //       .timeline()
  //       .to(
  //         blockEl.current,
  //         0.4,
  //         {
  //           backgroundColor: hover ? BG_COLOR_2 : "rgba(255, 255, 255, 0)",
  //           ease: Power3.easeInOut,
  //         },
  //         0
  //       )
  //       .to(
  //         blockEl.current,
  //         0.4,
  //         {
  //           color: hover ? "rgba(255, 255, 255, 0.99)" : "rgba(0, 0, 0, 0.99)",
  //           ease: Power3.easeInOut,
  //         },
  //         0
  //       )
  //   }
  // }, [hover])

  const onMouseEnter = (e: any) => {
    setHover(true)
  }

  const onMouseLeave = (e: any) => {
    setHover(false)
  }

  const _onClick = (e: any) => {
    setHover(false)
  }

  return (
    <PaginationBlockDiv
      className={`trans-ani ${
        page === currentPage
          ? "bg-blue-500 text-white-99"
          : "hover:bg-blue-500 hover:text-white-99"
      }`}
      onClick={_onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={blockEl}
    >
      {children}
    </PaginationBlockDiv>
  )
}

type PaginationProps = {
  page?: number
  pages?: number
  recordsPerPage?: number
  pageNeighbors?: number
  onPageChanged?: any
}

const Pagination: React.FC<PaginationProps> = ({
  page,
  pages,
  recordsPerPage,
  pageNeighbors,
  onPageChanged,
}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    calcPages()
    gotoPage(page)
  }, [])

  useEffect(() => {
    gotoPage(page)
  }, [page])

  useEffect(() => {
    calcPages()
  }, [pages, recordsPerPage])

  const calcPages = () => {
    setTotalPages(Math.ceil(pages / recordsPerPage))
  }

  /**
   * Let's say we have 10 pages and we set pageNeighbors to 2
   * Given that the current page is 6
   * The pagination control will look like the following:
   *
   * (1) < {4 5} [6] {7 8} > (10)
   *
   * (x) => terminal pages: first and last page(always visible)
   * [x] => represents current page
   * {...x} => represents page neighbours
   */
  const fetchPageNumbers = () => {
    /**
     * totalNumbers: the total page numbers to show on the control
     * totalBlocks: totalNumbers + 2 to cover for the left(<) and right(>) controls
     */
    const totalNumbers = pageNeighbors * 2 + 3
    const totalBlocks = totalNumbers + 2

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbors)
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbors)

      let pageArray: Array<any> = range(startPage, endPage)

      /**
       * hasLeftSpill: has hidden pages to the left
       * hasRightSpill: has hidden pages to the right
       * spillOffset: number of hidden pages either to the left or to the right
       */
      const hasLeftSpill = startPage > 2
      const hasRightSpill = totalPages - endPage > 1
      const spillOffset = totalNumbers - (pageArray.length + 1)

      switch (true) {
        // handle: (1) < {5 6} [7] {8 9} (10)
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = range(startPage - spillOffset, startPage - 1)
          pageArray = [LEFT_PAGE, ...extraPages, ...pageArray]
          break
        }

        // handle: (1) {2 3} [4] {5 6} > (10)
        case !hasLeftSpill && hasRightSpill: {
          const extraPages = range(endPage + 1, endPage + spillOffset)
          pageArray = [...pageArray, ...extraPages, RIGHT_PAGE]
          break
        }

        // handle: (1) < {4 5} [6] {7 8} > (10)
        case hasLeftSpill && hasRightSpill:
        default: {
          pageArray = [LEFT_PAGE, ...pageArray, RIGHT_PAGE]
          break
        }
      }

      return [1, ...pageArray, totalPages]
    }

    return range(1, totalPages)
  }

  const gotoPage = (page: number) => {
    //const { onPageChanged = f => f } = this.props

    const p = Math.max(0, Math.min(page, totalPages))

    setCurrentPage(p)

    const paginationData = {
      page: p,
      totalPages: totalPages,
      recordsPerPage: recordsPerPage,
      pages: pages,
    }

    return paginationData
  }

  const handleClick = (page: number) => (e: any) => {
    e.preventDefault()
    const paginationData = gotoPage(page)

    if (onPageChanged !== null) {
      onPageChanged(paginationData)
    }
  }

  const handleMoveLeft = (e: any) => {
    e.preventDefault()
    const paginationData = gotoPage(currentPage - pageNeighbors * 2 - 1)

    if (onPageChanged !== null) {
      onPageChanged(paginationData)
    }
  }

  const handleMoveRight = (e: any) => {
    e.preventDefault()
    const paginationData = gotoPage(currentPage + pageNeighbors * 2 + 1)

    if (onPageChanged !== null) {
      onPageChanged(paginationData)
    }
  }

  const pageArray = fetchPageNumbers()

  //console.log(pageArray)

  // return (
  //   {true ? (
  //   <Row className="justify-center" aria-label="Pagination">
  //     {pages.map((page: any, index: number) => {
  //       if (page === LEFT_PAGE) {
  //         return (
  //           <PaginationBlockDiv key={`left-${index}`}>
  //             <div>
  //               <a href="#" aria-label="Previous" onClick={handleMoveLeft}>
  //                 <span aria-hidden="true">&laquo;</span>
  //                 <span className="sr-only">Previous</span>
  //               </a>
  //             </div>
  //           </PaginationBlockDiv>
  //         )
  //       } else if (page === RIGHT_PAGE) {
  //         return (
  //           <PaginationBlockDiv key={`right-${index}`}>
  //             <div>
  //               <a href="#" aria-label="Next" onClick={handleMoveRight}>
  //                 <span aria-hidden="true">&raquo;</span>
  //                 <span className="sr-only">Next</span>
  //               </a>
  //             </div>
  //           </PaginationBlockDiv>
  //         )
  //       } else {
  //         return (
  //           <NumberPaginationBlockDiv
  //             page={page}
  //             currentPage={currentPage}
  //             key={`current-${index}`}
  //             onClick={handleClick(page)}
  //           >
  //             {page}
  //           </NumberPaginationBlockDiv>
  //         )
  //       }
  //     }}
  //   </Row>
  // ) : (<></>)}

  return (
    <>
      {totalPages > 1 && (
        <ul>
          {pageArray.map((page: any, index: number) => {
            if (page === LEFT_PAGE) {
              return (
                <li className="inline-block" key={`left-${index}`}>
                  <PaginationBlockDiv>
                    <a href="#" aria-label="Previous" onClick={handleMoveLeft}>
                      <span aria-hidden="true">&laquo;</span>
                      <span className="sr-only">Previous</span>
                    </a>
                  </PaginationBlockDiv>
                </li>
              )
            } else if (page === RIGHT_PAGE) {
              return (
                <li className="inline-block" key={`right-${index}`}>
                  <PaginationBlockDiv>
                    <a href="#" aria-label="Next" onClick={handleMoveRight}>
                      <span aria-hidden="true">&raquo;</span>
                      <span className="sr-only">Next</span>
                    </a>
                  </PaginationBlockDiv>
                </li>
              )
            } else {
              return (
                <li className="inline-block" key={`current-${index}`}>
                  <NumberPaginationBlockDiv
                    page={page}
                    currentPage={currentPage}
                  >
                    <a
                      href="#"
                      aria-label="Goto Page"
                      onClick={handleClick(page)}
                    >
                      {page}
                    </a>
                  </NumberPaginationBlockDiv>
                </li>
              )
            }
          })}
        </ul>
      )}
    </>
  )
}

Pagination.defaultProps = {
  page: 6,
  pages: 100,
  recordsPerPage: 10,
  pageNeighbors: 2,
  onPageChanged: null,
}

export default Pagination
