import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Property } from './property.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PropertiesService {
  constructor(
    @InjectRepository(Property)
    private repo: Repository<Property>,
  ) {}

  create(data: Partial<Property>) {
    const property = this.repo.create(data);
    return this.repo.save(property);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id } });
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
