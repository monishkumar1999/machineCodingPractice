import { useState } from "react";
import "./styles.css";

const OTP_COUNT = 5;
export default function App() {
  const [inputarr, setInputarr] = useState(new Array(OTP_COUNT).fill(""));

  const handleCHanges = (value, currentindex) => {
    if (isNaN(value)) return;
    // const newOtpArr = [...inputarr];
    // newOtpArr[index] = value.slice(-1);
    setInputarr((pre) => {
      return pre.map((item, i) => {
        return currentindex == i ? value.slice(-1) : item;
      });
    });
  };
  return (
    <div className="App">
      {inputarr.map((value, index) => {
        return (
          <input
            className="inputBox"
            value={value}
            key={index}
            onChange={(e) => {
              handleCHanges(e.target.value, index);
            }}
          />
        );
      })}
    </div>
  );
}
