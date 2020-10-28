import { getUsers } from "../../Api/users";
import { updateUsers } from "./updateUsers";

export function makeFetchUsers() {
  return async (dispatch: any) => {
    try{
      const users = await getUsers();
      dispatch(updateUsers(users));
    } catch (err) {
      console.error(err);
    }
  }
}
