import InputData from "./components/InputData.jsx";
import TableData from "./components/TableData.jsx";
import { useState } from "react";

function App() {
  const [initialInvestment, setInitialInvestment] = useState("");
  const [annualInvestment, setAnnualInvestment] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [duration, setDuration] = useState("1");

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
    <>
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
      <TableData
        initialInvestment={parseFloat(initialInvestment) || 0}
        annualInvestment={parseFloat(annualInvestment) || 0}
        expectedReturn={parseFloat(expectedReturn) || 0}
        duration={parseInt(duration) || 0}
      />
    </>
  );
}

export default App;
