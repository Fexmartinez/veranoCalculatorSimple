import React, { useState } from 'react';

const TravelCalculator = () => {
  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [remainingBudget, setRemainingBudget] = useState(budget);

  const handleBudgetChange = (event) => {
    setBudget(Number(event.target.value));
  };

  const handleExpensesChange = (event) => {
    setExpenses(Number(event.target.value));
  };

  const calculateRemainingBudget = () => {
    setRemainingBudget(budget - expenses);
  };

  return (
    <div>
      <h2>Calculadora de Gastos de Viaje</h2>
      <div>
        <label>
          Presupuesto:
          <input type="number" value={budget} onChange={handleBudgetChange} />
        </label>
      </div>
      <div>
        <label>
          Gastos:
          <input type="number" value={expenses} onChange={handleExpensesChange} />
        </label>
      </div>
      <button onClick={calculateRemainingBudget}>Calcular</button>
      <p>Presupuesto Restante: {remainingBudget}</p>
    </div>
  );
};

export default TravelCalculator;
