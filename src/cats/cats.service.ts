import { Injectable } from '@nestjs/common';
import { Cats } from './cats.model';

@Injectable()
export class CatsService {
  cats: Cats[] = [];

  insertCats(title: string, id: string) {
    const newCat = new Cats(new Date().toString(), id);
    this.cats.push(newCat);
    return newCat;
  }

  findAll() {
    return [...this.cats];
  }
}
