import { Injectable, Inject } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { APP_CONFIG, IWeatherSettings } from './weather.settings';

@Injectable()
/*http://api.openweathermap.org/data/2.5/weather?q=Sydney&APPID=0a9628699c4877549d93d511b85240e6*/
export class WeatherService{

    australianCities: Array<string> = ['Sydney', 'Brisbane', 'Melbourne', 'Perth', 'Hobart', 'Adelaide', 'Canberra', 'Darwin'];

    constructor(
      private http: Http,
      @Inject(APP_CONFIG) private config: IWeatherSettings) {}

    getWeatherAll(): any {
      let promises: Array<any> = [];
      this.getCityURLS().forEach((url)=>{
        promises.push(this.http.get(url).toPromise());
      });
      return Promise.all(promises);
    }

    private getCityURLS(){
      return this.australianCities.map((city: string)=> `${this.config.API_ENDPOINT}${city}&cnt=7&units=metric&APPID=${this.config.API_KEY}`)
    }
}
/*.then((response: Response) => {
 console.log('res returned', response.json());
 response.json() || {};
 })
 .catch((error: any)=>{
 console.log(error);
 });*/
