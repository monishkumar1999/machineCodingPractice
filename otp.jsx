import { useEffect, useRef, useState } from "react";
import "./styles.css";

const OTPLENGTH = 5;

export default function App() {
  const [inputArr, setInput] = useState(new Array(OTPLENGTH).fill());
  const inputRef = useRef([]);
  useEffect(() => {
    inputRef.current[0].focus();
  }, []);
  const handleChanges = (value, index) => {
    if (isNaN(value) || value == " ") return;

    setInput((pre) => {
      const copyarray = [...pre];
      copyarray[index] = value.slice(-1);
      return copyarray;
    });
    value && inputRef.current[index + 1]?.focus();
  };

  const handleDelete = (e, index) => {
    if (!e.target.value && e.key == "Backspace") {
      inputRef.current[index - 1]?.focus();
    }
  };
  return (
    <div className="App">
      {inputArr.map((e, index) => {
        return (
          <input
            className="input-box"
            key={index}
            value={e}
            ref={(e) => {
              inputRef.current[index] = e;
            }}
            onChange={(e) => {
              handleChanges(e.target.value, index);
            }}
            onKeyDown={(e) => handleDelete(e, index)}
          />
        );
      })}
    </div>
  );
}
