import { Inject, Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { PrismaClient } from '@prisma/client';
import { PRISMA_CLIENT } from 'src/prisma.module';

@Injectable()
export class TicketService {
  constructor(@Inject(PRISMA_CLIENT) private readonly clientRepository: PrismaClient) {}
  create(createTicketDto: CreateTicketDto) {

    return 
  }

  findAll() {
    return this.clientRepository.ticket.findMany();
  }

  findOne(id: number) {
    const ticketExists = this.clientRepository.ticket.findUnique({
      where: { id },
    });
    return  this.clientRepository.ticket.findUnique({
      where: { id },
    });
  }

  update(id: number, updateTicketDto: UpdateTicketDto) {
    const ticketExists = this.clientRepository.ticket.findUnique({
      where: { id },
    });
    return this.clientRepository.ticket.update({
      where: { id },
      data: updateTicketDto,
    });
  }

  remove(id: number) {
    const ticketExists = this.clientRepository.ticket.findUnique({
      where: { id },
    });
    return this.clientRepository.ticket.delete({
      where: { id },
    });
  }
}
