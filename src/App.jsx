import InputData from "./components/InputData.jsx";
import { useState } from "react";

function App() {
  const [initialInvestment, setInitialInvestment] = useState("0");
  const [annualInvestment, setAnnualInvestment] = useState("0");
  const [expectedReturn, setExpectedReturn] = useState("0");
  const [duration, setDuration] = useState("0");
  
  function handleInitialInvestmentChange(e) {
    setInitialInvestment(e.target.value);
  }

  function handleAnnualInvestmentChange(e) {
    setAnnualInvestment(e.target.value);
  }

  function handleExpectedReturnChange(e) {
    setExpectedReturn(e.target.value);
  }

  function handleDurationChange(e) {
    setDuration(e.target.value);
  }

  return (
    <InputData
      initialInvestment={initialInvestment}
      annualInvestment={annualInvestment}
      expectedReturn={expectedReturn}
      duration={duration}
    />
  );
}

export default App;