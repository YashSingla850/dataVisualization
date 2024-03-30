import React from "react";
import { dataToMap, getFlavanoid } from "../dataToMap";
import { calculateMean, calculateMedian, calculateMode } from "../utils";

const AlcoholProperty = () => {
  const map = dataToMap();
  const statistics = [];

  for (let [key, values] of map.entries()) {
    const flavanoidArr = getFlavanoid(key);
    const mean = calculateMean(flavanoidArr);
    const median = calculateMedian(flavanoidArr);
    const mode = calculateMode(flavanoidArr);
    statistics.push({ key, mean, median, mode });
  }

  return (
    <div>
      <h2>Statistics</h2>
      <table className="statistics-table">
        {" "}
        <thead>
          <tr>
            <th>Measure</th>
            <th>Flavanoid Mean</th>
            <th>Flavanoid Median</th>
            <th>Flavanoid Mode</th>
          </tr>
        </thead>
        <tbody>
          {statistics.map(({ key, mean, median, mode }) => (
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

export default AlcoholProperty;
