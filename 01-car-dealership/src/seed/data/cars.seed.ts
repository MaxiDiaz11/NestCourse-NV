import { Car } from 'src/cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'BMW',
    model: 'X6',
    year: 2020,
  },
  {
    id: uuid(),
    brand: 'Audi',
    model: 'Q7',
    year: 2021,
  },
  {
    id: uuid(),
    brand: 'Mercedes Benz',
    model: 'GLE',
    year: 2022,
  },
];
