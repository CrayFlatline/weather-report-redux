import {call, put, takeLatest} from 'redux-saga/effects'
import fetchWeather from '../api/Api';

function* changeCity(action) {
    try {
        const weather = yield call(fetchWeather, action.payload.cityId);
        yield put({type: 'CITY_FETCH_SUCCEEDED', payload: weather});
    } catch (e) {
        yield put({type: 'CITY_FETCH_FAILED', message: e.message});
    }
}

export default function* weatherSaga() {
    yield takeLatest('CITY_CHANGE', changeCity);
}
