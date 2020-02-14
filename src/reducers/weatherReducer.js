export default (state = {}, action) => {
    switch (action.type) {
        case 'CITY_CHANGE':
            return {
                cityData: action.payload.cityId
            };
        case 'CITY_FETCH_SUCCEEDED':
            return {
                status: 'success',
                user: action.payload.user
            };
        default:
            return state
    }
}
