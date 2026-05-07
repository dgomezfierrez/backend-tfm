import {
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Param,
  Body,
} from '@nestjs/common';

import { PropertiesService } from './properties.service';

@Controller('properties')
export class PropertiesController {

  constructor(
    private propertiesService: PropertiesService,
  ) {}

  @Post()
  create(@Body() body: any) {
    return this.propertiesService.create(body);
  }

  @Get()
  findAll() {
    return this.propertiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.propertiesService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.propertiesService.remove(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() body: any,
  ) {
    return this.propertiesService.update(id, body);
  }
}