import { Inject, Injectable } from '@nestjs/common';
import { CreateDealDto } from './dto/create-deal.dto';
import { UpdateDealDto } from './dto/update-deal.dto';
import { PrismaClient } from '@prisma/client';
import { PRISMA_CLIENT } from 'src/prisma.module';

@Injectable()
export class DealService {
  constructor( @Inject(PRISMA_CLIENT) private readonly clientRepository :PrismaClient) {}
  create(createDealDto: CreateDealDto) {
    return 
  }

  findAll() {
    return this.clientRepository.deal.findMany(
    
    );
  }

  findOne(id: number) {
    const dealExists = this.clientRepository.deal.findUnique({
      where: { id },
    });
    return this.clientRepository.deal.findUnique({
      where: { id },
    });
  }

  update(id: number, updateDealDto: UpdateDealDto) {
    const dealExists = this.clientRepository.deal.findUnique({
      where: { id },
    });
    return this.clientRepository.deal.update({
      where: { id },
      data: updateDealDto,
    });
  }

  remove(id: number) {
    const dealExists = this.clientRepository.deal.findUnique({
      where: { id },
    });
    return this.clientRepository.deal.delete({
      where: { id },
    });
  }
}
