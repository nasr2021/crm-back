import { Injectable, Inject } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

import { PrismaClient } from '@prisma/client';
import { PRISMA_CLIENT } from 'src/prisma.module';

@Injectable()
export class ClientService {
  constructor(@Inject(PRISMA_CLIENT) private readonly prisma: PrismaClient) {}

  create(createClientDto: CreateClientDto) {
    return 
  }

  findAll() {
    return this.prisma.client.findMany();
  }

  findOne(id: number) {
    return this.prisma.client.findUnique({ where: { id } });
  }

  async update(id: number, updateClientDto: UpdateClientDto) {
    const clientExists = await this.prisma.client.findUnique({ where: { id } });
    if (!clientExists) {
      throw new Error(`Client with id ${id} not found`);
    }
    return this.prisma.client.update({
      where: { id },
      data: updateClientDto,
    });
  }

  async remove(id: number) {
    const clientExists = await this.prisma.client.findUnique({ where: { id } });
    if (!clientExists) {
      throw new Error(`Client with id ${id} not found`);
    }
    return this.prisma.client.delete({ where: { id } });
  }
}
