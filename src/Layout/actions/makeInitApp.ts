import { IAppState } from "../../appReducer"
import { makeFetchConversations } from "../../Chat/actions/makeFetchConversations"
import { updatePollingTimer } from "../../Chat/actions/updatePollingTimer"
import { makeFetchConnectedUser } from "../../Users/actions/makeFetchConnectedUser"
import { makeFetchUsers } from "../../Users/actions/makeFetchUsers"

export function makeInitApp(){
  return (dispatch: any, getState: () => IAppState) => {
    dispatch(makeFetchConnectedUser())
    dispatch(makeFetchUsers())
    dispatch(makeFetchConversations())

    const timer = setInterval(() => {
      if(getState().users.connectedUser) {
        dispatch(makeFetchConversations())
      }
    }, 3000);
    dispatch(updatePollingTimer(timer));
  }
}