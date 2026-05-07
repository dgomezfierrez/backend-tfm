import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Property } from './property.entity';

@Injectable()
export class PropertiesService {

  constructor(
    @InjectRepository(Property)
    private repo: Repository<Property>,
  ) {}

  create(data: any) {
    const property = this.repo.create(data);
    return this.repo.save(property);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  remove(id: number) {
    return this.repo.delete(id);
  }

  update(id: number, data: any) {
    return this.repo.update(id, data);
  }
}