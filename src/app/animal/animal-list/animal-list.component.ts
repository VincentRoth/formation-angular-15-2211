import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Animal } from '../../shared/api/animal';
import { AnimalService } from '../../shared/api/animal.service';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.scss'],
})
export class AnimalListComponent implements OnInit {
  animals: Animal[];

  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {
    this.refreshData();
  }

  deleteItem(animal: Animal): void {
    this.animalService.delete(animal.id).subscribe(() => {
      this.refreshData();
    });
  }

  private refreshData(): void {
    this.animalService.getAll().subscribe((data) => {
      this.animals = data;
    });
  }
}
