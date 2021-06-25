import React from "react"
import { defaults, Line } from "react-chartjs-2"

type GraphProps = {
  data1: Array<number>
  data2: Array<number>
}

const FeeGraph: React.FC<GraphProps> = ({ data1, data2 }) => {
  const labels = []

  for (var i = 0; i < data1.length; ++i) {
    labels.push(i + 1)
  }

  return (
    <Line
      data={{
        labels: labels,
        //Bring in data
        datasets: [
          {
            label: "Without Fees",
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
      }}
      options={{
        plugins: {
          legend: {
            display: true,
          },
        },
        title: {
          display: false,
        },
        scales: {
          x: {
            title: {
              display: true,
              text: "Years",
              font: {
                weight: "bold",
              },
            },
            grid: {
              display: false,
            },
          },
          y: {
            title: {
              display: true,
              text: "Dollars (thousands)",
              font: {
                weight: "bold",
              },
            },
            grid: {
              display: true,
            },
          },
        },
      }}
    />
  )
}

FeeGraph.defaultProps = {
  data1: [],
  data2: [],
}

export default FeeGraph
