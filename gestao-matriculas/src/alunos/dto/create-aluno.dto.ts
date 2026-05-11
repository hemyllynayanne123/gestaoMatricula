import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateAlunoDto {
  @IsNotEmpty()
  codigo_matricula: string;

  @IsNotEmpty()
  nome_completo: string;

  @IsOptional()
  situacao?: string;

  @IsOptional()
  acompanhamento: string = '';
}
