import React, { useEffect, useRef } from "react"
import Chart from "chart.js"

type LineGraphProps = {
  arr?: number
  startingBalance?: number
  savings?: number
  frontLoad?: number
  years?: number
  er?: number
}

const LineGraph: React.FC<LineGraphProps> = ({
  arr,
  er,
  startingBalance,
  savings,
  frontLoad,
  years,
}) => {
  const chartRef = useRef(null)

  useEffect(() => {
    const labels = []
    const data1 = []
    const data2 = []
    let b1 = startingBalance
    let b2 = startingBalance * (1 - frontLoad)

    for (var i = 0; i < years; ++i) {
      labels.push(i + 1)
      data1.push(b1)
      data2.push(b2)
      b1 = b1 * (1 + arr) + savings
      b2 = b2 * (1 + arr) * (1 - er) + savings
    }

    const myChartRef = chartRef.current.getContext("2d")

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
  }, [arr, er, startingBalance, frontLoad, savings, years])

  return (
    <div>
      <canvas id="myChart" ref={chartRef} />
    </div>
  )
}

LineGraph.defaultProps = {
  arr: 0.08,
  er: 0.01,
  startingBalance: 10000,
  savings: 10000,
  frontLoad: 0.05,
  years: 40,
}

export default LineGraph
