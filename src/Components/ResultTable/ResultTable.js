import React from "react";
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const ResultTable = (props) => {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((singleyr) => (
          <tr key={singleyr.year}>
            <td>{singleyr.year}</td>
            <td>{formatter.format(singleyr.savingsEndOfYear)}</td>
            <td>{formatter.format(singleyr.yearlyInterest)}</td>
            <td>
              {formatter.format(
                singleyr.savingsEndOfYear -
                  props.initialInvestments -
                  singleyr.year * singleyr.yearlyContribution
              )}
            </td>
            <td>
              {formatter.format(
                props.initialInvestments +
                  singleyr.year * singleyr.yearlyContribution
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultTable;
