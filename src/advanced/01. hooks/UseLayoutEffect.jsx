import React, { useEffect, useLayoutEffect, useState } from 'react';

export const UseLayoutEffect = () => {
  const [value, setValue] = useState(0);

  useLayoutEffect(() => {
    if (value === 0) {
      setValue(10 + Math.random() * 200);
    }
  }, [value]);

  console.log('render', value);

  return <div onClick={() => setValue(0)}>value: {value}</div>;
};

// 1. state updates
// 2. DOM is mutated
// 3. useEffect

// 1. state updates
// 2. useLayoutEffect
// 3. DOM is mutated
