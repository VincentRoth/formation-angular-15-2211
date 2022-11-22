import { Injectable } from '@angular/core';
import { Animal } from './animal';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  get(): Animal {
    return {
      name: 'Mon animal du service',
      species: 'chat',
      veterinarian: 'Panoramix',
    };
  }
}
