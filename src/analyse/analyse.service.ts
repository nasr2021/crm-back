import { Injectable } from '@nestjs/common';
import { CreateAnalyseDto } from './dto/create-analyse.dto';
import { UpdateAnalyseDto } from './dto/update-analyse.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AnalyseService {
  constructor(private readonly clientRepository: PrismaClient) {}
  create(createAnalyseDto: CreateAnalyseDto) {
    return  this.clientRepository.create({
      data: createAnalyseDto,
    });
  }

  findAll() {
    return this.clientRepository.findMany({
      where: { type: 'analyse' },
    });
  }

  findOne(id: number) {
    return  this.clientRepository.findUnique({
      where: { id },
    });
  }

  update(id: number, updateAnalyseDto: UpdateAnalyseDto) {
    return this.clientRepository.update({
      where: { id },
      data: updateAnalyseDto,
    });
  }

  remove(id: number) {
    return this.clientRepository.delete({
      where: { id },
    });;
  }
}
