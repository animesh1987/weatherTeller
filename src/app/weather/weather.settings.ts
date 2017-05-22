import { OpaqueToken } from '@angular/core';

export let APP_CONFIG = new OpaqueToken("app.config");

export interface IWeatherSettings{
  API_ENDPOINT: string,
  API_KEY: string
}

export const WeatherSettings: IWeatherSettings = {
  API_ENDPOINT: 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast/daily?q=',
  API_KEY: '0a9628699c4877549d93d511b85240e6'
};
