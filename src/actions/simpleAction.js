export const changeCityAction = (id) => {
    return {
        type: 'CITY_CHANGE',
        payload: {
            cityId: id
        }
    }
};
