// @flow

import Immutable from 'immutable'
import type { fromJS as Immut } from 'immutable'

import {
  GET_TRAINS_API_INITIAL,
  GET_TRAINS_API_REQUEST,
  GET_TRAINS_API_SUCCESS,
  GET_TRAINS_API_FAILURE,
} from '../action/fetch-trains'

const initialState = Immutable.fromJS({
  status: GET_TRAINS_API_INITIAL,
  trains: {},
})

const trainsReducer = (state: Immut = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case GET_TRAINS_API_REQUEST:
      return state.set('status', action.type)
    case GET_TRAINS_API_SUCCESS:
      return state.set('status', action.type)
                  .set('trains', action.payload)
    case GET_TRAINS_API_FAILURE:
      return state.set('status', action.type)
    default: return state
  }
}

export default trainsReducer
