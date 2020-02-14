import {call, put, takeLatest} from 'redux-saga/effects'
import fetchUser from '../api/Api';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* changeCity(action) {

    try {
        const user = yield call(fetchUser, action.payload.cityId);
        yield put({type: 'CITY_FETCH_SUCCEEDED', payload: user});
    } catch (e) {
//        yield put({type: "CITY_FETCH_FAILED", message: e.message});
    }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
export default function* weatherSaga() {
    yield takeLatest('CITY_CHANGE', changeCity);
}
