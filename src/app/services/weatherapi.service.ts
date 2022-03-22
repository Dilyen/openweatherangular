import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class WeatherapiService {

  constructor(private http:HttpClient) { }
  private apikey:string = "b7dd3ce841e5678acf43f3bdc5176723"      

  getWeather(location:string){
   return this.http.get<any>(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${this.apikey}&units=metric`);
  }
}
