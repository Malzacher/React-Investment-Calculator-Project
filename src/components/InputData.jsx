import image from "../assets/investment-calculator-logo.png";

export default function InputData() {
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
            <input type="number" />
          </p>
          <p>
            <label>Annual Investment</label>
            <input type="number" />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>Expected Return</label>
            <input type="number" />
          </p>
          <p>
            <label>Duration</label>
            <input type="number" />
          </p>
        </div>
      </div>
    </>
  );
}
