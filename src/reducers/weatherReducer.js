export default (state = {}, action) => {
    switch (action.type) {
        case 'CITY_CHANGE':
            return {
                cityData: action.payload.cityId
            };
        case 'CITY_FETCH_SUCCEEDED':
            return {
                status: 'success',
                cityData: action.payload
            };
        default:
            return state
    }
}
