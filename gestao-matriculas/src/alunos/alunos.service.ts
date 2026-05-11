import { Injectable } from '@nestjs/common';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { Aluno } from './aluno.entity';

@Injectable()
export class AlunosService {
  private alunos: Aluno[] = [];

  create(createAlunoDto: CreateAlunoDto): Aluno {
    const aluno = new Aluno(
      createAlunoDto.codigo_matricula,
      createAlunoDto.nome_completo,
      createAlunoDto.acompanhamento,
      createAlunoDto.situacao,
    );

    this.alunos.push(aluno);

    return aluno;
  }
}
