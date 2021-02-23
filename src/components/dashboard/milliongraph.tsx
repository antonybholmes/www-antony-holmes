import React from "react"
import { Bar, defaults } from "react-chartjs-2"

type GraphProps = {
  age: number
  data1: Array<number>
  data2: Array<number>
}

const MillionGraph: React.FC<GraphProps> = ({ age, data1, data2 }) => {
  const labels = []

  for (var i = 0; i < data1.length; ++i) {
    labels.push(age + i)
  }

  return (
    <Bar
      data={{
        labels: labels,
        //Bring in data
        datasets: [
          {
            label: "Balance",
            data: data1,
            backgroundColor: "rgba(0,0,255,0.5)",
            borderColor: "rgba(0,0,255,0.5)",
          },
          {
            label: "Balance After Inflation",
            data: data2,
            backgroundColor: "rgba(255,0,0,0.5)",
            borderColor: "rgba(255,0,0,0.5)",
          },
        ],
      }}
      options={{
        tooltips: {
          enabled: true,
          callbacks: {
            label: (tooltipItem: any, data) => {
              return (
                "$" + Math.round(tooltipItem.yLabel * 1000000).toLocaleString()
              )
            },
          },
        },
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
                labelString: "Year",
                fontStyle: "bold",
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
                labelString: "Millions Of Dollars",
                fontStyle: "bold",
              },
              gridLines: {
                display: true,
              },
            },
          ],
        },
      }}
    />
  )
}

MillionGraph.defaultProps = {
  data1: [],
  data2: [],
}

export default MillionGraph
