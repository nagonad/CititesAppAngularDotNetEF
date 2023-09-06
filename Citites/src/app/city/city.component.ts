import { Component } from '@angular/core';
import { CityService } from '../common/services/city.service';
import { City, emptyCity } from '../common/model/city';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
})
export class CityComponent {
  Cities: City[] = [];
  selectedCity: City = emptyCity;
  originalName = '';

  constructor(private cityService: CityService) {}

  ngOnInit() {
    this.fetchCities();
  }

  fetchCities() {
    this.cityService.getAllCities().subscribe((result) => {
      console.log(result);
      this.Cities = result;
    });
  }

  selectCity(city: City): void {
    this.selectedCity = { ...city };
    this.originalName = city.name;
  }

  clearForm() {
    this.selectedCity = emptyCity;
    this.originalName = '';
  }

  saveCity(city: City) {
    if (city.id > 0) this.updateCity(city);
    else this.createCity(city);
  }

  deleteCity(id: number) {
    this.cityService
      .deleteCity(id)
      .subscribe((result) => (this.Cities = result));
  }

  createCity(city: City) {
    let cityOnSave: any = this.selectedCity;
    delete cityOnSave.id;
    this.cityService
      .createCity(cityOnSave)
      .subscribe((result) => (this.Cities = result));
  }

  updateCity(city: City) {
    this.cityService
      .updateCity(city)
      .subscribe((result) => (this.Cities = result));
  }
}
