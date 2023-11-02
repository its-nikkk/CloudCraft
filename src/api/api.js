const apikey = 'dc50e95ab9b1b09a0a0dc649e41388dd';

const getWeather = async (city) => {
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`)
    .then((res) => res.json())
    .then((json) => {
        return json;
    })
}

export default getWeather;