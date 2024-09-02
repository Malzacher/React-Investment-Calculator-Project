import { calculateInvestmentResults, formatter } from "../util/investment";

export default function TableData({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const investmentResults = calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  });

  return (
    <div id="result">
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {investmentResults.map(function (result, index) {
            return (
              <div key={index}>
                <th>Year</th>
            <th>{annualData.interest[index]}</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
              </div>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
