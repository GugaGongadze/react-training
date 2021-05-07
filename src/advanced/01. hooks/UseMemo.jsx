import { useMemo, useState } from 'react';

const iterations = 50;
const multiplier = 1000000000;

function heavyCalc(iterations, multiplier) {
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
}

export const UseMemo = () => {
  const [value, setValue] = useState('');

  const nums = useMemo(() => heavyCalc(iterations, multiplier), []);

  return (
    <ul>
      <input
        type="text"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      {nums.map((num, idx) => (
        <li key={idx}>{num}</li>
      ))}
    </ul>
  );
};
