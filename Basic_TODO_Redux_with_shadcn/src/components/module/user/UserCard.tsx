import { Card, CardContent } from "@/components/ui/card";
import type { IUser } from "@/taskTypes";

interface IProps {
  task: IUser;
}

const UserCard = () => {
  return (
    <Card>
      <CardContent>name</CardContent>
    </Card>
  );
};

export default UserCard;
