import { Inject, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { PrismaClient } from '@prisma/client';
import { PRISMA_CLIENT } from 'src/prisma.module';

@Injectable()
export class AuthService {
  constructor( @Inject(PRISMA_CLIENT)private readonly clientRepository :PrismaClient) {}
  create(createAuthDto: CreateAuthDto) {
    return 
  }

  findAll() {
    return this.clientRepository.user.findMany({

    });
  }

  findOne(id: number) {
    const authExists = this.clientRepository.user.findUnique({
      where: { id },
    });
    return this.clientRepository.user.findUnique({
      where: { id },
    });
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    const authExists = this.clientRepository.user.findUnique({
      where: { id },
    });
    return this.clientRepository.user.update({
      where: { id },
      data: updateAuthDto,
    });
  }

  remove(id: number) {
    const authExists = this.clientRepository.user.findUnique({
      where: { id },
    });
    return this.clientRepository.user.delete({
      where: { id },
    });
  }
}
