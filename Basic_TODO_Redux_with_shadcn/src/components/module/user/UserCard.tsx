import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { IUser } from "@/taskTypes";
import { TrashIcon } from "lucide-react";

interface IProps {
  user: IUser;
}

const UserCard = ({ user }: IProps) => {
  console.log(user);
  return (
    <Card>
      <div className="flex justify-between items-center p-5">
        <CardContent>{user.name}</CardContent>
        <Button>
          <TrashIcon size={20} />
        </Button>
      </div>
    </Card>
  );
};

export default UserCard;
