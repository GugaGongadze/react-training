import React, { useCallback, useState } from 'react';

const iterations = 50;
const multiplier = 1000000000;

const ChildComponent = React.memo((props) => {
  const { heavyCalc } = props;

  const nums = heavyCalc(iterations, multiplier);

  return (
    <div>
      {nums.map((num, idx) => (
        <li key={idx}>{num}</li>
      ))}
    </div>
  );
});

export const UseCallback = () => {
  const [value, setValue] = useState('');

  const heavyCalc = useCallback((iterations, multiplier) => {
    const primes = [];
    for (let i = 0; i < iterations; i++) {
      let candidate = i * (multiplier * Math.random());
      var isPrime = true;
      for (var c = 2; c <= Math.sqrt(candidate); ++c) {
        if (candidate % c === 0) {
          // not prime
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        primes.push(candidate);
      }
    }
    return primes;
  }, []);

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <ChildComponent heavyCalc={heavyCalc} />
    </div>
  );
};
