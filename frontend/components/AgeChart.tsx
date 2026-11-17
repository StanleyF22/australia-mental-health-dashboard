"use client";

import {
  Bar
} from "react-chartjs-2";

export default function AgeChart() {

  const data = {
    labels: [
      "15-24",
      "25-34",
      "35-44",
      "45-54",
      "55-64",
      "65+"
    ],
    datasets: [
      {
        label:"Rate",
        data:[15,19,18,16,14,10]
      }
    ]
  };

  return (
    <div className="mt-10">
      <Bar data={data}/>
    </div>
  );
}
