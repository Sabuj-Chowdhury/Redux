import { AddUserModal } from "@/components/module/user/AddUserModal";
// import UserCard from "@/components/module/user/UserCard";

// import { selectUser } from "@/redux/features/user/userSlice";
// import { useAppSelector } from "@/redux/hooks";

const Users = () => {
  // const users = useAppSelector(selectUser);
  // console.log(users);
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
      {/* <div className="grid grid-cols-4 gap-5 m-5">
        {users.map((user) => (
          <UserCard key={user.id} user={user}></UserCard>
        ))}
      </div> */}
    </div>
  );
};

export default Users;
