import { getValue } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";

const UserInput = (props) => {
  const [inputUser, setInputUser] = useState({
    "current-savings": 10000,
    "yearly-contribution": 1200,
    "expected-return": 7,
    duration: 10,
  });

  const submitHandler = (event) => {
    event.preventDefault();
    props.onUserInput(inputUser);
  };
  const resetForm = () => {
    setInputUser({
      "current-savings": 10000,
      "yearly-contribution": 1200,
      "expected-return": 7,
      duration: 10,
    });
  };
  const inputHandler = (id, value) => {
    setInputUser((prev) => {
      return {
        ...prev,
        [id]: +value,
      };
    });
  };

  return (
    <form onSubmit={submitHandler} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(event) =>
              inputHandler("current-savings", event.target.value)
            }
            value={inputUser["current-savings"]}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(event) =>
              inputHandler("yearly-contribution", event.target.value)
            }
            value={inputUser["yearly-contribution"]}
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(event) =>
              inputHandler("expected-return", event.target.value)
            }
            type="number"
            value={inputUser["expected-return"]}
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(event) => inputHandler("duration", event.target.value)}
            type="number"
            id="duration"
            value={inputUser["duration"]}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" onClick={resetForm} className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserInput;
