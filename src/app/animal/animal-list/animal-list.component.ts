import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Animal } from '../../shared/api/animal';
import { AnimalService } from '../../shared/api/animal.service';
import { PhonePipe } from '../../shared/phone.pipe';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.scss'],
})
export class AnimalListComponent implements OnInit {
  animals: Animal[];

  constructor(
    private animalService: AnimalService,
    private phonePipe: PhonePipe
  ) {}

  ngOnInit(): void {
    this.animals = this.animalService.getAll();
    console.log(
      this.animals[0].phoneNumber,
      this.phonePipe.transform(this.animals[0].phoneNumber)
    );
  }
}
