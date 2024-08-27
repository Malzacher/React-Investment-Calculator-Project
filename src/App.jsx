import InputData from "./components/InputData.jsx"
import { state, useState } from "react"

function App() {
  const setInitialInvestment, intitalInvestment = useState("0");
  const setAnnualInvestment, annualInvestment = useState("0");
  const setExpectedReturn, expectedReturn = useState("0");
  const setDuration, duration = useState("0");

  return (
    <InputData />
  )
}

export default App