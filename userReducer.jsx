step 1
import { useReducer } from "react";

export default function App() {
  const reducerfn = () => {
    console.log("reducer function is working");
  };
  const [state, dispatch] = useReducer(reducerfn, 1);
   // here the useReducer() get the first parameter as a function next is the initial value of the state
// and we store the state and dispatch state is the value , dipatch is this is function to update the data 
// when we call the dispatch function the reducer function will call you can see in ##line number 17##
  return (
    <div>
      app
      <button
        onClick={() => {
          dispatch();
        }}
      >
        Increment
      </button>
    </div>
  );
}

