import React from "react";
import { dataToMap, getGamma } from "../dataToMap";
import { calculateMean, calculateMedian, calculateMode } from "../utils";
const Gamma = () => {
  const map = dataToMap();
  const data = [];

  for (let [key, values] of map.entries()) {
    const gammaArr = getGamma(key);
    const mean = calculateMean(gammaArr);
    const median = calculateMedian(gammaArr);
    const mode = calculateMode(gammaArr);
    data.push({ key, mean, median, mode });
  }
  console.log(data);
  return (
    <div>
      <h2>Gamma Data</h2>
      <table className="statistics-table">
        {" "}
        <thead>
          <tr>
            <th>Measure</th>
            <th>Gamma Mean</th>
            <th>Gamma Median</th>
            <th>Gamma Mode</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ key, mean, median, mode }) => (
            <tr key={key}>
              <td>Class {key}</td>
              <td>{mean.toFixed(3)}</td>
              <td>{median.toFixed(3)}</td>
              <td>{mode.toFixed(3)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Gamma;
