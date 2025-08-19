import { Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class TicketService {
  constructor(private readonly clientRepository: PrismaClient) {}
  create(createTicketDto: CreateTicketDto) {

    return this.clientRepository.create({
      data: createTicketDto,
    });
  }

  findAll() {
    return this.clientRepository.findMany({ where: { type: 'ticket' } });
  }

  findOne(id: number) {
    const ticketExists = this.clientRepository.findUnique({
      where: { id },
    });
    return  this.clientRepository.findUnique({
      where: { id },
    });
  }

  update(id: number, updateTicketDto: UpdateTicketDto) {
    const ticketExists = this.clientRepository.findUnique({
      where: { id },
    });
    return this.clientRepository.update({
      where: { id },
      data: updateTicketDto,
    });
  }

  remove(id: number) {
    const ticketExists = this.clientRepository.findUnique({
      where: { id },
    });
    return  this.clientRepository.delete({
      where: { id },
    });
  }
}
