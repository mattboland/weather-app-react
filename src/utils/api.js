function handleError(error) {
    console.warn(error);
    return null;
}

export async function getFiveDayForecast(cityName) {
    const apiKey = process.env.REACT_APP_API_KEY
    const apiCall = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${cityName}&type=accurate&APPID=${apiKey}&cnt=5`
    const response = await fetch(apiCall)
        .catch(handleError);
    const weatherJson = await response.json(); 
    
    return weatherJson;
}