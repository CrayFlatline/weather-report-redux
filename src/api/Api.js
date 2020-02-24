export default function fetchWeather(id) {
    console.log(id);
    return {
        city: 'Kyiv',
        cityId: id,
        weather: 'cloudy'
    }
}
