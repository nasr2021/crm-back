import { Inject, Injectable } from '@nestjs/common';
import { CreateAnalyseDto } from './dto/create-analyse.dto';
import { UpdateAnalyseDto } from './dto/update-analyse.dto';
import { PrismaClient } from '@prisma/client';
import { PRISMA_CLIENT } from 'src/prisma.module';

@Injectable()
export class AnalyseService {
  constructor(@Inject(PRISMA_CLIENT) private readonly clientRepository: PrismaClient) {}
  create(createAnalyseDto: CreateAnalyseDto) {
    return 
  }

  findAll() {
    return this.clientRepository.client.findMany();
  }

  findOne(id: number) {
    return  
  }

  update(id: number, updateAnalyseDto: UpdateAnalyseDto) {
    return
  }

  remove(id: number) {
    return 
  }
}
