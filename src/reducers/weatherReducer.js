export default (state = {status: '', weather: {}, cityId: 0}, action) => {
    switch (action.type) {
//         case 'CITY_CHANGE':
//             return {
//                 ...state
// //                cityData: action.payload.cityId
//             };
        case 'CITY_FETCH_SUCCEEDED':
            return {
                ...state,
                status: 'success',
                weather: action.payload
            };
        case 'CITY_FETCH_FAILED':
            return {
                ...state,
                status: 'failure',
                errorMessage: action.payload
            };
        default:
            return state
    }
}