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
  getOneNinja(@Param('id') id: string) {
    try {
      return this.ninjasService.getOneNinja(+id);
    } catch (e) {
      throw new NotFoundException(e.message);
    }
  }
  // POST /ninjas
  @Post()
  createNinja(@Body() createNinjaDTO: CreateNinjaDto) {
    return this.ninjasService.createNinja(createNinjaDTO);
  }
  // PUT /ninjas/:id => {}
  @Put(':id')
  updateNinja(@Param('id') id: string, @Body() updateNinjaDTO: CreateNinjaDto) {
    return this.ninjasService.updateNinja(+id, updateNinjaDTO);
  }
  // DELETE /ninjas/:id
  @Delete(':id')
  deleteNinja(@Param('id') id: string) {
    try {
      return this.ninjasService.deleteNinja(+id);
    } catch (e) {
      throw new NotFoundException(e.message);
    }
  }
}
