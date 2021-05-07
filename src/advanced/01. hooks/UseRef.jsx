import { useEffect, useRef } from 'react';

export const UseRef = () => {
  const inputRef = useRef(null);
  const timeoutRef = useRef(0);

  return (
    <form>
      <input ref={inputRef} type="text" />
    </form>
  );
};
