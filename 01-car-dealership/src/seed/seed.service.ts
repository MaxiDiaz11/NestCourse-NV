import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brand.seed';
import { BrandsService } from 'src/brands/brands.service';
import { CarsService } from 'src/cars/cars.service';

@Injectable()
export class SeedService {
  constructor(
    private readonly brandService: BrandsService,
    private readonly carService: CarsService,
  ) {}

  populateDB() {
    this.brandService.fillBrandsWithSeedData(BRANDS_SEED);
    this.carService.fillCarsWithSeedData(CARS_SEED);
    return 'Seed data has been populated successfully!';
  }
}
