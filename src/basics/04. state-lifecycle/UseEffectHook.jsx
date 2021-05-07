import { useEffect, useState } from 'react';

function UseEffectHook() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // async function getUsers() {
    //   const res = await somePromise();
    //   setCount(res);
    // }
    // getUsers();
  }, [count]);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

export default UseEffectHook;
