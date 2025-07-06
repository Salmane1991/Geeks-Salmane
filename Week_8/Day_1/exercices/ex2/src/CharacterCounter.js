import { useRef, useState } from "react";

function CharacterCounter() {
  const inputRef = useRef();
  const [count, setCount] = useState(0);

  function handleInput() {
    const length = inputRef.current.value.length;
    setCount(length);
  }

  return (
    <div>
      <input ref={inputRef} onInput={handleInput} />
      <p>Characters: {count}</p>
    </div>
  );
}

export default CharacterCounter;
