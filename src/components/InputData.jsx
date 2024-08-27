import image from "../assets/investment-calculator-logo.png";

export default function InputData({intitalInvestment, annualInvestment, expectedReturn, duration}) {
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
            <input value={intitalInvestment} type="number" />
          </p>
          <p>
            <label>Annual Investment</label>
            <input value={annualInvestment} type="number" />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>Expected Return</label>
            <input value={expectedReturn} type="number" />
          </p>
          <p>
            <label>Duration</label>
            <input value={duration} type="number" />
          </p>
        </div>
      </div>
    </>
  );
}
