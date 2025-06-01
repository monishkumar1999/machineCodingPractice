import { useEffect, useRef } from "react";
import "./styles.css";

export default function App() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  useEffect(() => {
    ref1.current.focus();
    ref2.current.focus();
  }, []);
  return (
    <div className="App">
      <input ref={ref1} />

      <input ref={ref2} />
    </div>
  );
}
   
