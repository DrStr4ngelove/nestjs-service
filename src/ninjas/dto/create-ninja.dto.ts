import { IsEnum, MinLength } from 'class-validator';

export class CreateNinjaDto {
  id: number;
  @MinLength(3)
  name: string;
  @IsEnum(['star', 'sword', 'kunai', 'katanana'], {
    message: 'Invalid weapon',
  })
  weapon: 'star' | 'sword' | 'kunai' | 'katanana';
}
