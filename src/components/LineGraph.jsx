import React from "react";
import { Line } from "react-chartjs-2";
import "../Styles/Graph.css";

const state = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Rainfall Delhi",
      fill: false,
      lineTension: 0.5,
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [65, 59, 80, 81, 45, 56],
    },
  ],
};

const LineGraph = () => {
  return (
    <div className="tabcontent1">
      <div className="template">LINE GRAPH</div>
      <Line
        data={state}
        options={{
          title: {
            display: true,
            text: "Average Rainfall per month",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
};
export default LineGraph;
