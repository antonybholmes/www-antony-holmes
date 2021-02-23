import React from "react"
import { defaults, Line } from "react-chartjs-2"

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
      data={{
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
      }}
      options={{
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

RetirementGraph.defaultProps = {
  data1: [],
}

export default RetirementGraph
