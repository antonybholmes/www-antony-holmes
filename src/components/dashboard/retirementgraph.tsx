import React, { useEffect, useRef } from "react"
import Chart from "chart.js"

type GraphProps = {
  data1?: Array<number>
}

const RetirementGraph: React.FC<GraphProps> = ({ data1 }) => {
  const chartRef = useRef(null)

  const createGraph = () => {
    if (!chartRef || !chartRef.current || data1.length === 0) {
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
            label: "Retirement",
            data: data1,
            backgroundColor: "rgba(0,0,255,0.1)",
            borderColor: "rgba(0,0,255,0.5)",
          },
        ],
      },
      options: {
        legend: {
          display: false,
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
                labelString: "Dollars (millions)",
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
  }, [data1, chartRef])

  return (
    <div>
      <canvas id="myChart" ref={chartRef} />
    </div>
  )
}

RetirementGraph.defaultProps = {
  data1: [],
}

export default RetirementGraph
