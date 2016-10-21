import { Injectable } from '@angular/core';
import { Bill } from './bill';

const BILLS: Bill[] = [
  {

  }
]

@Injectable()
export class HeroService {
  getHeroes(): Promise<Bill[]> {
    return Promise.resolve(BILLS);
  }
}
