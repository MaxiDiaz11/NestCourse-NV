import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'BMW',
      model: 'X6',
      year: 2020,
    },
    {
      id: 2,
      brand: 'Audi',
      model: 'Q7',
      year: 2019,
    },
    {
      id: 3,
      brand: 'Mercedes',
      model: 'GLE',
      year: 2020,
    },
  ];

  getAllCars() {
    return this.cars;
  }

  getCardById(id: number) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException(`Car with id '${id}' not found`);

    return car;
  }
}
