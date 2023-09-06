import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../model/city';

const BASE_URL = 'https://localhost:40443/';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  model = 'city';

  constructor(private http: HttpClient) {}

  getAllCities(): Observable<City[]> {
    return this.http.get<City[]>(BASE_URL + this.model);
  }

  createCity(city: City): Observable<City[]> {
    return this.http.post<City[]>(BASE_URL + this.model, city);
  }

  deleteCity(id: number): Observable<City[]> {
    return this.http.delete<City[]>(BASE_URL + this.model + '/' + id);
  }

  updateCity(city: City): Observable<City[]> {
    return this.http.put<City[]>(BASE_URL + this.model, city);
  }
}
