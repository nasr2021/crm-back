import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor( private readonly clientRepository :PrismaClient) {}
  create(createAuthDto: CreateAuthDto) {
    return this.clientRepository.create({
      data: createAuthDto,
    });
  }

  findAll() {
    return this.clientRepository.findMany({
      where: { type: 'auth' },
    });
  }

  findOne(id: number) {
    const authExists = this.clientRepository.findUnique({
      where: { id },
    });
    return this.clientRepository.findUnique({
      where: { id },
    });
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    const authExists = this.clientRepository.findUnique({
      where: { id },
    });
    return this.clientRepository.update({
      where: { id },
      data: updateAuthDto,
    });
  }

  remove(id: number) {
    const authExists = this.clientRepository.findUnique({
      where: { id },
    });
    return this.clientRepository.delete({
      where: { id },
    });
  }
}
