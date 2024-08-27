import InputData from "./components/InputData.jsx";
import { useState } from "react";

function App() {
  // Correctly destructure the state and setter functions
  const [initialInvestment, setInitialInvestment] = useState("0");
  const [annualInvestment, setAnnualInvestment] = useState("0");
  const [expectedReturn, setExpectedReturn] = useState("0");
  const [duration, setDuration] = useState("0");

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