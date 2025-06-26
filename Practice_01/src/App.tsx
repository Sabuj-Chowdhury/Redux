import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/features/counter/counterSlice";
import type { RootState } from "./redux/store";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <div>{count}</div>
      <button onClick={() => dispatch(decrement())}>decrease</button>
    </>
  );
}

export default App;
