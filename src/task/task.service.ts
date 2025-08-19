import { Inject, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaClient } from '@prisma/client';
import { PRISMA_CLIENT } from 'src/prisma.module';

@Injectable()
export class TaskService {
  constructor(@Inject(PRISMA_CLIENT) private readonly clientRepository:PrismaClient) {}
  create(createTaskDto: CreateTaskDto) {
    return 
  }

  findAll() {
    const taskExists = this.clientRepository.ticket.findMany();
    return this.clientRepository.ticket.findMany();
  }

  findOne(id: number) {
    const taskExists = this.clientRepository.ticket.findUnique({
      where: { id },
    });
    return this.clientRepository.ticket.findUnique({
      where: { id },
    });
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    const taskExists = this.clientRepository.ticket.findUnique({
      where: { id },
    });
    return this.clientRepository.ticket.update({
      where: { id },
      data: updateTaskDto,
    });
  }

  remove(id: number) {
    const taskExists = this.clientRepository.ticket.findUnique({
      where: { id },
    });
    return this.clientRepository.ticket.delete({
      where: { id },
    });
  }
}
