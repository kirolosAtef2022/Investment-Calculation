import { useState } from "react";
import Header from "./Components/Header/Header";
import ResultTable from "./Components/ResultTable/ResultTable";
import UserInput from "./Components/UserInput/UserInput";

function App() {
  const [userInput, setUserInput] = useState(null);
  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };
  const yearlyData = [];

  if (userInput) {
    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header />
      <UserInput onUserInput={calculateHandler} />
      {!userInput && (
        <p style={{ textAlign: "center" }}>No investments calculated yet.</p>
      )}
      {userInput && (
        <ResultTable
          data={yearlyData}
          initialInvestments={userInput["current-savings"]}
        />
      )}
    </div>
  );
}
export default App;
