import userReducer from './userReducer'
import { defaultState as userState } from './userReducer'
import metaReducer, { defaultState as metaState } from './metaReducer'
import elawaEventsReducer, { defaultState as elawaEventsState } from './elawaEventsReducer'
import elawaEventsShowReducer, {defaultState as elawaEventsShowState} from './elawaEventsShowReducer'
import elawaSegmentPerformancesReducer, {defaultState as elawaSegmentPerformancesState} from './elawaSegmentPerformancesReducer.js'

export default {
  user: userReducer,
  meta: metaReducer,
  elawaEvents: elawaEventsReducer,
  elawaEventsShow: elawaEventsShowReducer,
  elawaSegmentPerformances: elawaSegmentPerformancesReducer,
}

export const defaultStates = {
  user: userState,
  meta: metaState,
  elawaEvents: elawaEventsState,
  elawaEventsShow: elawaEventsShowState,
  elawaSegmentPerformances: elawaSegmentPerformancesState,
}
