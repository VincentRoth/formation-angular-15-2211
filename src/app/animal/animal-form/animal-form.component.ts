import { formatCurrency } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Animal } from '../../shared/api/animal';
import { AnimalService } from '../../shared/api/animal.service';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.scss'],
})
export class AnimalFormComponent implements OnInit {
  animal: Animal;
  @ViewChild('animalForm') animalForm: NgForm;

  constructor(
    private animalService: AnimalService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      this.animalService.get(Number(id)).subscribe((data) => {
        this.animal = data;
      });
    } else {
      this.animal = {
        name: '',
        species: '',
        veterinarian: '',
      };
    }
  }

  onSubmit(): void {
    if (this.animalForm.form.invalid) {
      return;
    }

    let save$: Observable<Animal | void>;

    if (this.animal.id) {
      save$ = this.animalService.update(this.animal);
    } else {
      save$ = this.animalService.create(this.animal);
    }

    save$.subscribe(() => {
      this.router.navigate(['/animals']);
    });
  }
}
