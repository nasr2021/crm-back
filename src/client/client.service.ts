import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ClientService {
  constructor(private readonly clientRepository: PrismaClient) {} 
  create(createClientDto: CreateClientDto) {
    return this.clientRepository.create({
      data: createClientDto,
    });
  }

  findAll() {
    return this.clientRepository.findAll();
  }

  findOne(id: number) {
    return this.clientRepository.findOne({ where: { id } });
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    const clientExists = this.clientRepository.findOne({ where: { id } });
    if (!clientExists) {
      throw new Error(`Client with id ${id} not found`);
    }
    const client = this.clientRepository.update({
      where: { id },
      data: updateClientDto,
    });
    return client;
  }

  remove(id: number) {
    const clientExists = this.clientRepository.findOne({ where: { id } });
    if (!clientExists) {
      throw new Error(`Client with id ${id} not found`);
    }
    return this.clientRepository.delete({ where: { id } });
  }
}
