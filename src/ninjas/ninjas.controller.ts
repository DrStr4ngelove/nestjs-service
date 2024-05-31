import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Query,
  Body,
} from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';

@Controller('ninjas')
export class NinjasController {
  // GET /ninjas?type=fast => []
  @Get()
  getNinjas(@Query('type') type: string) {
    return [{ type }];
  }
  // GET /ninjas/:id => {}
  @Get(':id')
  getOneNinja(@Param('id') id: string) {
    return { id };
  }
  // POST /ninjas
  @Post()
  createNinja(@Body() createNinjaDTO: CreateNinjaDto) {
    return {
      name: createNinjaDTO.name,
    };
  }
  // PUT /ninjas/:id => {}
  @Put(':id')
  updateNinja(@Param('id') id: string, @Body() updateNinjaDTO: CreateNinjaDto) {
    return { id, name: updateNinjaDTO.name };
  }
  // DELETE /ninjas/:id
  @Delete(':id')
  deleteNinja(@Param('id') id: string) {
    return { id };
  }
}
