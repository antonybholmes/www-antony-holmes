import React from "react"
import { Line } from "react-chartjs-2"

type GraphProps = {
  data1: Array<number>
}

const RetirementGraph: React.FC<GraphProps> = ({ data1 }) => {
  const labels = []

  for (var i = 0; i < data1.length; ++i) {
    labels.push(i)
  }

  return (
    <Line
      type="line"
      data={{
        labels: labels,
        //Bring in data
        datasets: [
          {
            label: "Retirement",
            data: data1,
            backgroundColor: "rgba(0,0,255,0.1)",
            borderColor: "rgba(0,0,255,0.5)",
            fill: true,
          },
        ],
      }}
      options={{
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
        title: {
          display: false,
        },
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: "Year",
              font: {
                weight: "bold",
              },
            },
            grid: {
              display: false,
            },
          },
          y: {
            display: true,
            title: {
              display: true,
              text: "Millions Of Dollars",
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

RetirementGraph.defaultProps = {
  data1: [],
}

export default RetirementGraph
