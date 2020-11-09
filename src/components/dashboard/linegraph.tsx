import React, { useEffect, useRef } from "react"
import Chart from "chart.js"

type GraphProps = {
  data1?: Array<number>
  data2?: Array<number>
}

const LineGraph: React.FC<GraphProps> = ({ data1, data2 }) => {
  const chartRef = useRef(null)

  const createGraph = () => {
    if (
      !chartRef ||
      !chartRef.current ||
      data1.length === 0 ||
      data2.length === 0
    ) {
      return
    }

    const myChartRef = chartRef.current.getContext("2d")

    const labels = []

    for (var i = 0; i < data1.length; ++i) {
      labels.push(i + 1)
    }

    new Chart(myChartRef, {
      type: "line",
      data: {
        labels: labels,
        //Bring in data
        datasets: [
          {
            label: "Wihout Fees",
            data: data1,
            backgroundColor: "rgba(0,0,255,0.1)",
            borderColor: "rgba(0,0,255,0.5)",
          },
          {
            label: "With Fees",
            data: data2,
            backgroundColor: "rgba(255,0,0,0.1)",
            borderColor: "rgba(255,0,0,0.5)",
          },
        ],
      },
      options: {
        legend: {
          display: true,
        },
        title: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Years",
              },
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Dollars",
              },
              gridLines: {
                display: true,
              },
            },
          ],
        },
      },
    })
  }

  useEffect(() => {
    createGraph()
  }, [])

  useEffect(() => {
    createGraph()
  }, [data1, data2, chartRef])

  return (
    <div>
      <canvas id="myChart" ref={chartRef} />
    </div>
  )
}

LineGraph.defaultProps = {
  data1: [],
  data2: [],
}

export default LineGraph
