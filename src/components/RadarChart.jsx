import React from "react";
import {Radar} from 'react-chartjs-2';

const state = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'January',
        backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: 'rgba(179,181,198,1)',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        data: [65, 59, 90, 81, 56, 55, 40]
      },
      {
        label: 'February',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        pointBackgroundColor: 'rgba(255,99,132,1)',
        pointBorderColor: '#B21F00"',
        pointHoverBackgroundColor: '#B21F00"',
        pointHoverBorderColor: 'rgba(255,99,132,1)',
        data: [60, 53, 62, 77, 60, 44, 73]
      },
      {
        label: 'March',
        backgroundColor: 'hsl(290,100%,10%)',
        borderColor: 'hsl(290,100%,10%)',
        pointBackgroundColor: 'hsl(290,100%,10%)',
        pointBorderColor: '#C9DE00',
        pointHoverBackgroundColor: '#C9DE00',
        pointHoverBorderColor: 'hsl(290,100%,10%)',
        data: [0, 48, 40, 19, 96, 0, 100]
      },
      {
        label: 'April',
        backgroundColor: 'hsl(120,100%,10%)',
        borderColor: 'hsl(120,100%,10%)',
        pointBackgroundColor: 'hsl(120,100%,10%)',
        pointBorderColor: '#2FDE00',
        pointHoverBackgroundColor: '#2FDE00',
        pointHoverBorderColor: 'hsl(120,100%,10%)',
        data: [0, 50, 47, 15, 88, 0, 92]
      },
      {
        label: 'May',
        backgroundColor: 'rgba(0,255,0,0.3)',
        borderColor: 'rgba(0,255,0,0.3)',
        pointBackgroundColor: 'rgba(0,255,0,0.3)',
        pointBorderColor: '#00A6B4',
        pointHoverBackgroundColor: '#00A6B4',
        pointHoverBorderColor: 'rgba(0,255,0,0.3)',
        data: [57, 45, 86, 0, 77, 82, 56]
      }
    ]
  };

const RadarChart = () => {
  return (
    <>
      <div className="tabcontent2">
        <div className="template">RADAR CHART</div> <br />
        <Radar
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
    </>
  );
};
export default RadarChart;
