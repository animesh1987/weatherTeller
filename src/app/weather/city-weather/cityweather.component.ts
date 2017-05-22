import { Component, OnInit, Input } from '@angular/core';

interface weatherlist{
  date: Date;
  dt: number;
  clouds: number;
  deg: number;
  humidity: number;
  pressure: number;
  speed: number;
  temp: Object;
  weather: Array<Object>;
}

interface cityweatherdata{
  city: Object;
  cnt: number;
  list: Array<weatherlist>;
  message: number;
  cod: string;
}

@Component({
  selector: 'city-weather-card',
  styleUrls: ['./cityweather.component.css'],
  templateUrl: './cityweather.component.html'
})

export class CityWeatherComponent implements OnInit{
  @Input()
  cityweatherdata: cityweatherdata;
  today: any = new Date()

  constructor(){}

  addDate(days: number){
    console.log(days + this.today.getDate() + days);
    return this.today.getDate() + days;
  }

  ngOnInit(){
    //console.log('Initing, ', this.cityweatherdata);
    this.cityweatherdata.list.forEach((city, i)=>{
      city.date = this.today.getTime() + (i * 24 * 60 * 60 * 1000 )
    });
    console.log(this.cityweatherdata);
    return;
  }

  getICONurl(icon:string){
    return `http://openweathermap.org/img/w/${icon}.png`;
  }

  getActualTempCelsius(temp: number){
    return Math.round((temp - 273.15) * 100) / 100;
  }

}
