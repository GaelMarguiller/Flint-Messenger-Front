import { getConnectedUser } from "../../Api/users";
import { updateConnectedUser } from "./updateConnectedUser";

export function makeFetchConnectedUser() {
  return async (dispatch: any) => {
    try{
      const connectedUser = await getConnectedUser();
      dispatch(updateConnectedUser(connectedUser))
    } catch (err) {
      console.error(err);
    }
  }
}
