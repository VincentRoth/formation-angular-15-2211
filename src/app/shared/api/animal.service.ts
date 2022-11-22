import { Injectable } from '@angular/core';
import { Animal } from './animal';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  getAll(): Animal[] {
    return [
      {
        name: 'Idéfix',
        species: 'dog',
        veterinarian: "Panoramix D'Armorique",
        comment: 'Développe une allergie à la potion magique.',
        email: 'test1@gmail.com',
        phoneNumber: '06.12.34.56.78',
      },
      {
        name: 'Chatbus',
        species: 'cat',
        veterinarian: 'Ged Épervier',
        comment:
          'Faire prendre rdv 1 mois au moins en avance afin de pouvoir réserver le hangar du mécaniste voisin.',
        email: 'test2@gmail.com',
        phoneNumber: '06.12.34.56.79',
      },
      {
        name: 'Teto',
        species: 'fox-squirrel',
        veterinarian: 'Ged Épervier',
        comment: 'Très agité.',
        email: 'test3@gmail.com',
        phoneNumber: '06.12.34.56.80',
      },
    ];
  }

  get(): Animal {
    return {
      name: 'Mon animal du service',
      species: 'chat',
      veterinarian: 'Panoramix',
      email: 'email@example.com',
    };
  }
}
