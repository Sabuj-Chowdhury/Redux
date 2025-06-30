import { AddUserModal } from "@/components/module/user/AddUserModal";
import UserCard from "@/components/module/user/UserCard";

const Users = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <h1 className="text-3xl font-bold">Users</h1>
      </div>
      {/* add user modal/dialog */}
      <div className="flex justify-center gap-5 items-center m-2">
        <AddUserModal />
      </div>
      {/* user card */}
      <div className="grid grid-cols-4 gap-5 m-5">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </div>
  );
};

export default Users;
