import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import api from '../api'

import {
  SAVE_PERSON,
  SAVE_PERSON_REQUEST,
  SAVE_PERSON_SUCCESS
} from '../modules/persons'

export function* savePersonSaga({ payload }) {
  try {
    if (payload.id === -1) {
      yield put({ type: SAVE_PERSON_REQUEST, payload: payload })
      const user = yield call(api.simulatePost, payload)
      yield put({ type: SAVE_PERSON_SUCCESS, payload: user })
    } else {
      const user = yield call(api.simulatePatch, payload)
      yield put({ type: SAVE_PERSON_SUCCESS, payload: user })
    }
  } catch (e) {
    yield put({ type: 'SAVE_PERSON_FAILED', message: e.message })
  }
}

function* sagas() {
  yield takeEvery(SAVE_PERSON, savePersonSaga)
}

export default sagas
