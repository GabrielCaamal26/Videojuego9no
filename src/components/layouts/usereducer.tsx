import React, { useReducer } from "react";

interface State {
  count: number;
}

type Action = { type: "increment" } | { type: "decrement" } | { type: "reset" };

const initialState: State = { count: 0 };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error("Unknown action type");
  }
}

const Counter: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-2xl font-bold mb-4 text-white">Count: {state.count}</p>
      <div className="flex space-x-4">
        <button
          onClick={() => dispatch({ type: "increment" })}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch({ type: "decrement" })}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition duration-300"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch({ type: "reset" })}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700 transition duration-300"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
