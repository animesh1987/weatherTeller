import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service'

@Component({
    selector: 'weather-australia',
    styleUrls: ['./weather.component.css'],
    templateUrl: './weather.component.html'
})

export class WeatherComponent implements  OnInit {
    cities: Array<any> = [];

    constructor(private weatherservice: WeatherService){}

    ngOnInit(){

      console.log('Getting data');

      this.weatherservice
        .getWeatherAll()
        .then(data => {
          this.cities = data.map((d)=>{return d.json();})
        });
    }

}
