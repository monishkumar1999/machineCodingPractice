import React, { useCallback, useEffect, useMemo, useState } from "react";

export default function App() {
  const [dark, setDark] = useState(false);
  const [data, setData] = useState("");

  const theme = useMemo(() => {
    return { backgroundColor: dark ? "black" : "white" };
  }, [dark]);

  const getList = useCallback(() => {
    return [Number(data) + 1, Number(data) + 2, Number(data) + 3];
  }, [data]);

  // const getList = () => {
  //   return [Number(data) + 1, Number(data) + 2, Number(data) + 3];
  // };
  // if we pass the function like this when we change the theme the list useEffect will call again bacause the
  // referance is changed

  return (
    <div style={theme}>
      <button onClick={() => setDark(!dark)}>change theme</button>

      <input
        type="text"
        value={data}
        onChange={(e) => {
          setData(e.target.value);
        }}
      />
      <List getList={getList} />
    </div>
  );
}

function List({ getList }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(getList());
    console.log(" list use Effect is calling");
  }, [getList]); // important!

  return (
    <div>
      {list.map((e, index) => {
        return <div key={index}>{e}</div>;
      })}
    </div>
  );
}








////////////////./././././.


import React, { useCallback, useEffect, useMemo, useState } from "react";

export default function App() {
  const [data, setData] = useState(1);
  const [dark, isDark] = useState(false);

  const handleCalulation = (value) => {
    setData(value);
  };

  const theme = useCallback(
    () => ({
      backgroundColor: dark ? "black" : "white",
    }),
    [dark]
  );

  useEffect(() => {
    console.log("its changing");
  }, [theme]);

  return (
    <div style={theme()}>
      <div>UseMemo</div>
      <input
        onChange={(e) => {
          handleCalulation(e.target.value);
        }}
      />
      {data}

      <button onClick={() => isDark(!dark)}>Dark mode</button>
    </div>
  );
}


.......////////////............../////////////............../////////////..........////////////..........///////////.

import React, { useState } from "react";

const Button = React.memo(({ onClick }) => {
  console.log("🔁 Button Rendered");
  return <button onClick={onClick}>Click Me</button>;
});

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("✅ Button Clicked");
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button> 
      <Button onClick={handleClick} />
    </div>
  );
}
// if i click the this button the button component will call why because of the function memory referance is changed( usestate varibale updated) so the compoent this new props come so React memo allow to rerender

the use callback 

import React, { useCallback, useState } from "react";

const Button = ({ onClick }) => {
  console.log("🔁 Button Rendered");
  return <button onClick={onClick}>Click Me</button>;
};

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("✅ Button Clicked");
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <Button onClick={handleClick} />
    </div>
  );
}

// here first time render only the handleClick function referance created so when state update the child (Button) component will not update
