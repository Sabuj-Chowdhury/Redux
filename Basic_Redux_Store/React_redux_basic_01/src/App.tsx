import { useDispatch } from "react-redux";
import { decrement, increment } from "./redux/features/counter/counterSlice";

function App() {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <button onClick={handleIncrement}>Increase</button>
      <div>0</div>
      <button onClick={handleDecrement}>Decrease</button>
    </div>
  );
}

export default App;
