export interface City {
  id: number;
  name: string;
  population: number;
  longitude: string;
  latitude: string;
}

export const emptyCity: City = {
  id: 0,
  name: '',
  population: 0,
  longitude: '',
  latitude: '',
};
