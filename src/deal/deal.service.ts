import { Injectable } from '@nestjs/common';
import { CreateDealDto } from './dto/create-deal.dto';
import { UpdateDealDto } from './dto/update-deal.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DealService {
  constructor( private readonly clientRepository :PrismaClient) {}
  create(createDealDto: CreateDealDto) {
    return this.clientRepository.create({
      data: createDealDto,
    });
  }

  findAll() {
    return this.clientRepository.findMany({
      where: { type: 'deal' },
    });
  }

  findOne(id: number) {
    const dealExists = this.clientRepository.findUnique({
      where: { id },
    });
    return this.clientRepository.findUnique({
      where: { id },
    });
  }

  update(id: number, updateDealDto: UpdateDealDto) {
    const dealExists = this.clientRepository.findUnique({
      where: { id },
    });
    return this.clientRepository.update({
      where: { id },
      data: updateDealDto,
    });
  }

  remove(id: number) {
    const dealExists = this.clientRepository.findUnique({
      where: { id },
    });
    return this.clientRepository.delete({
      where: { id },
    });
  }
}
