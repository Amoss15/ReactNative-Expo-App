/******************************************
*    Title: How To Create a Weather App with React (OpenWeatherMap API)
*    Author: Jarrett Retz
*    Date: May 28, 2021
*    Code version: Unknown
*    Availability: https://rapidapi.com/blog/weather-app-react/
*
********************************************/
import React from 'react';

const Forecast = () => {

    function getForecast(e) {
        e.preventDefault();
     
        if (city.length === 0) {
            return setError(true);
        }
     
        // Clear state in preparation for new data
        setError(false);
        setResponseObj({});
       
        setLoading(true);
       
        let uriEncodedCity = encodeURIComponent(city);
     
     fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                "x-rapidapi-key": "apikey"
            }
        })
        .then(response => response.json())
        .then(response => {
            if (response.cod !== 200) {
                throw new Error()
            }
     
            setResponseObj(response);
            setLoading(false);
        })
        .catch(err => {
            setError(true);
            setLoading(false);
            console.log(err.message);
        });
     }

   return (
       // JSX code will go here
   )
}

export default Forecast;