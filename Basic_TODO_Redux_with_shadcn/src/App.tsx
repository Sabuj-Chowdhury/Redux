import { Outlet } from "react-router";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto m-5 p-5">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;
