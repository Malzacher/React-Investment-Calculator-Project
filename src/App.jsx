import InputData from "./components/InputData.jsx";
import { useState } from "react";

function App() {
  const [initialInvestment, setInitialInvestment] = useState("0");
  const [annualInvestment, setAnnualInvestment] = useState("0");
  const [expectedReturn, setExpectedReturn] = useState("0");
  const [duration, setDuration] = useState("0");
  
  function handleInitialInvestmentChange(event) {
    setInitialInvestment(event.target.value);
  }

  function handleAnnualInvestmentChange(event) {
    setAnnualInvestment(event.target.value);
  }

  function handleExpectedReturnChange(event) {
    setExpectedReturn(event.target.value);
  }

  function handleDurationChange(event) {
    setDuration(event.target.value);
  }

  return (
    <InputData
      initialInvestment={initialInvestment}
      onInitialInvestmentChange={handleInitialInvestmentChange}
      annualInvestment={annualInvestment}
      onAnnualInvestmentChange={handleAnnualInvestmentChange}
      expectedReturn={expectedReturn}
      onExpectedReturnChange={handleExpectedReturnChange}
      duration={duration}
      onDurationChange={handleDurationChange}
    />
  );
}

export default App;