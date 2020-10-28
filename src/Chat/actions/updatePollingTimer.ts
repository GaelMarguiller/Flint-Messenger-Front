import { IUpdatePollingTimerAction, UPDATE_POLLING_TIMER } from '../chatTypes';

export function updatePollingTimer(timer: NodeJS.Timeout): IUpdatePollingTimerAction{
  return {
    type: UPDATE_POLLING_TIMER,
    timer: timer
  }
}
