import image from "../assets/investment-calculator-logo.png";

export default function InputData({
  initialInvestment, // Corrected typo
  onInitialInvestmentChange,
  annualInvestment,
  onAnnualInvestmentChange,
  expectedReturn,
  onExpectedReturnChange,
  duration,
  onDurationChange,
}) {
  return (
    <>
      <div id="header">
        <img src={image} alt="" />
        <h1>React Investment Calculator</h1>
      </div>
      <div id="user-input">
        <div className="input-group">
          <p>
            <label>Initial Investment</label>
            <input
              value={initialInvestment} // Corrected typo
              type="number"
              onChange={onInitialInvestmentChange} // Pass event implicitly
            />
          </p>
          <p>
            <label>Annual Investment</label>
            <input
              value={annualInvestment}
              type="number"
              onChange={onAnnualInvestmentChange} // Pass event implicitly
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>Expected Return</label>
            <input
              value={expectedReturn}
              type="number"
              onChange={onExpectedReturnChange} // Pass event implicitly
            />
          </p>
          <p>
            <label>Duration</label>
            <input
              value={duration}
              type="number"
              onChange={onDurationChange} // Pass event implicitly
            />
          </p>
        </div>
      </div>
    </>
  );
}
