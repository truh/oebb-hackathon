// @flow

import 'isomorphic-fetch'

import { createAction } from 'redux-actions'

export const GET_TRAINS_API_INITIAL = 'GET_TRAINS_API_INITIAL'
export const GET_TRAINS_API_REQUEST = 'GET_TRAINS_API_REQUEST'
export const GET_TRAINS_API_SUCCESS = 'GET_TRAINS_API_SUCCESS'
export const GET_TRAINS_API_FAILURE = 'GET_TRAINS_API_FAILURE'

export const getTrainsApiRequest = createAction(GET_TRAINS_API_REQUEST)
export const getTrainsApiSuccess = createAction(GET_TRAINS_API_SUCCESS)
export const getTrainsApiFailure = createAction(GET_TRAINS_API_FAILURE)

export const fetchTrains = () => (dispatch: Function) => {
  dispatch(getTrainsApiRequest())
  return fetch(getTrainsApiFailure(), { method: 'GET' }).then((res) => {
    if (!res.ok) {
      throw Error(res.statusText)
    }
    return res.json()
  }).then((data) => {
    dispatch(getTrainsApiSuccess(data))
  }).catch((error) => {
    dispatch(getTrainsApiFailure(error))
  })
}
