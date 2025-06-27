import { Link } from "react-router";
import { ModeToggle } from "../mode-toggle";

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto p-5 m-5 flex justify-between items-center ">
      {/* logo */}
      <div className="font-bold text-2xl"> TaskMaster</div>
      {/* nav links */}
      <div className="flex items-center gap-5">
        <Link to="/task">Task</Link>
        <Link to="/users">User</Link>
      </div>
      {/* dark/light mood */}
      <div>
        <ModeToggle></ModeToggle>
      </div>
    </nav>
  );
};

export default Navbar;
