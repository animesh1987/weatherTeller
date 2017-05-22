import { Routes } from '@angular/router';

import { WeatherComponent } from './weather/weather.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'weather', pathMatch: 'full' },
  { path: 'weather', component: WeatherComponent }
];


