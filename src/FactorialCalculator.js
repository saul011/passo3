import React, { useState, useMemo } from 'react';

const factorial = (n) => {
  console.log('Calculating factorial...');
  if (n <= 1) return 1;
  return n * factorial(n - 1);
};

const FactorialCalculator = () => {
  const [number, setNumber] = useState(0);

  const result = useMemo(() => factorial(number), [number]);

  return (
    <div>
      <h1>Factorial Calculator</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
      />
      <p>Factorial of {number} is {result}</p>
    </div>
  );
};

export default FactorialCalculator;
