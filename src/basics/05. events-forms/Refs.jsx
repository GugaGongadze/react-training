import { useEffect, useRef } from 'react';

function Refs() {
  const textRef = useRef(null);
  const inputRef = useRef(null);

  console.log(inputRef);

  useEffect(() => {
    console.log(inputRef);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.style.margin = 0;
    }
  }, []);

  return (
    <form>
      <input ref={textRef} type="text" />
      <input ref={inputRef} type="text" />
    </form>
  );
}

export default Refs;
