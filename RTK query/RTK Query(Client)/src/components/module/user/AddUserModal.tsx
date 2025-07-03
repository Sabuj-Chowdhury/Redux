import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
// import { addUser } from "@/redux/features/user/userSlice";
// import { useAppDispatch } from "@/redux/hooks";
// import type { IUser } from "@/taskTypes";
import { useState } from "react";

import { useForm } from "react-hook-form";

export function AddUserModal() {
  const [open, setOpen] = useState(false);
  const form = useForm();
  // const dispatch = useAppDispatch();

  // const onSubmit: SubmitHandler<FieldValues> = (data) => {
  //   // console.log(data);
  //   // dispatch(addUser(data as IUser));
  //   setOpen(false);
  //   form.reset();
  // };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="cursor-pointer">Add User +</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add User</DialogTitle>
          <DialogDescription className="sr-only">add user</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form className="space-y-5">
            {/* name form field */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>User name</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                </FormItem>
              )}
            />

            <DialogFooter className="m-3">
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
