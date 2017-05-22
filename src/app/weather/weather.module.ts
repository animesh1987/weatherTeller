import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//config
import { APP_CONFIG, WeatherSettings } from './weather.settings';

//services
import { WeatherService } from './weather.service';

//container components
import { WeatherComponent } from './weather.component';

//child components
import { CityWeatherComponent } from './city-weather/cityweather.component';

@NgModule({
  declarations:[
    WeatherComponent,
    CityWeatherComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: APP_CONFIG, useValue: WeatherSettings },
    WeatherService
  ],
  exports:[
    WeatherComponent
  ]
})

export class WeatherModule{

}
