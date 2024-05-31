import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Query,
  Body,
  NotFoundException,
  ParseIntPipe,
  ValidationPipe,
} from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {
  constructor(private readonly ninjasService: NinjasService) {}
  // GET /ninjas?weapon=katanana => []
  @Get()
  getNinjas(@Query('weapon') weapon: string) {
    return this.ninjasService.getNinjas(weapon);
  }
  // GET /ninjas/:id => {}
  @Get(':id')
  getOneNinja(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.ninjasService.getOneNinja(id);
    } catch (e) {
      throw new NotFoundException(e.message);
    }
  }
  // POST /ninjas
  @Post()
  createNinja(@Body(new ValidationPipe()) createNinjaDTO: CreateNinjaDto) {
    return this.ninjasService.createNinja(createNinjaDTO);
  }
  // PUT /ninjas/:id => {}
  @Put(':id')
  updateNinja(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateNinjaDTO: CreateNinjaDto,
  ) {
    return this.ninjasService.updateNinja(id, updateNinjaDTO);
  }
  // DELETE /ninjas/:id
  @Delete(':id')
  deleteNinja(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.ninjasService.deleteNinja(id);
    } catch (e) {
      throw new NotFoundException(e.message);
    }
  }
}
