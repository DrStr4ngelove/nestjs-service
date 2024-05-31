import { Injectable } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';

@Injectable()
export class NinjasService {
  private ninjas = [];

  getNinjas(weapon?: string) {
    if (weapon) {
      return this.ninjas.filter(
        (ninja) => ninja.weapon.toLowerCase() === weapon.toLowerCase(),
      );
    }
    return this.ninjas;
  }

  getOneNinja(id: number) {
    const ninja = this.ninjas.find((ninja) => ninja.id === +id);
    if (!ninja) throw new Error('Ninja not found');
    return ninja;
  }

  createNinja(createNinjaDTO: CreateNinjaDto) {
    const newNinja = { id: Date.now(), ...createNinjaDTO };
    this.ninjas.push(newNinja);
    return newNinja;
  }

  updateNinja(id: number, updateNinjaDTO: CreateNinjaDto) {
    const ninja = this.getOneNinja(id);
    Object.assign(ninja, updateNinjaDTO);
    return ninja;
  }

  deleteNinja(id: number) {
    const index = this.ninjas.findIndex((ninja) => ninja.id === id);
    if (index === -1) throw new Error('Ninja not found');
    this.ninjas.splice(index, 1);
    return { id };
  }
}
