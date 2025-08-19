import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class TaskService {
  constructor(private readonly clientRepository:PrismaClient) {}
  create(createTaskDto: CreateTaskDto) {
    return this.clientRepository.create({
      data: createTaskDto,
    });
  }

  findAll() {
    const taskExists = this.clientRepository.findMany({
      where: { type: 'task' },
    });
    return this.clientRepository.findMany({
      where: { type: 'task' },
    });
  }

  findOne(id: number) {
    const taskExists = this.clientRepository.findUnique({
      where: { id },
    });
    return this.clientRepository.findUnique({
      where: { id },
    });
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    const taskExists = this.clientRepository.findUnique({
      where: { id },
    });
    return this.clientRepository.update({
      where: { id },
      data: updateTaskDto,
    });
  }

  remove(id: number) {
    const taskExists = this.clientRepository.findUnique({
      where: { id },
    });
    return this.clientRepository.delete({
      where: { id },
    });
  }
}
