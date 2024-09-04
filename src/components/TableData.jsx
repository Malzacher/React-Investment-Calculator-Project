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
              <tr key={index}>
                <td>{result.year}</td>
                <td>{formatter.format(result.valueEndOfYear)}</td>
                <td>{formatter.format(result.interest)}</td>
                <td>
                  {formatter.format(
                    result.valueEndOfYear -
                      (initialInvestment + annualInvestment * (index + 1))
                  )}
                </td>
                <td>
                  {formatter.format(
                    initialInvestment + annualInvestment * (index + 1)
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
