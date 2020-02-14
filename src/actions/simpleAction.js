export const changeCityAction = () => {
    return {
        type: 'CITY_CHANGE',
        payload: {
            cityId: 33
        }
    }
};

export const changeCitySuccessAction = () => {
    return {
        type: 'CITY_FETCH_SUCCEEDED',
        payload: {
            cityId: 33
        }
    }
};

