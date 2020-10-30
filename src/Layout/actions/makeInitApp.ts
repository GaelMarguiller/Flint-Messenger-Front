import { IAppState } from "../../appReducer"
import { makeFetchConversations } from "../../Chat/actions/makeFetchConversations"
import { makeFetchConnectedUser } from "../../Users/actions/makeFetchConnectedUser"
import { makeFetchUsers } from "../../Users/actions/makeFetchUsers"
import { makeStartSocket } from "./makeStartSocket"

export function makeInitApp(){
  return async (dispatch: any, getState: () => IAppState) => {
    await dispatch(makeFetchConnectedUser())
    dispatch(makeFetchUsers())
    dispatch(makeFetchConversations())
    dispatch(makeStartSocket())
  }
}
