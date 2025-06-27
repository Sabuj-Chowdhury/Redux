import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto p-5 m-5 flex justify-between items-center ">
      {/* logo */}
      <div className="font-bold text-2xl"> TaskMaster</div>
      {/* nav links */}
      <div className="flex items-center gap-5">
        <Link to="/">User</Link>
        <Link to="/task">Task</Link>
      </div>
      {/* dark/light mood */}
      <div>dark/light</div>
    </nav>
  );
};

export default Navbar;
