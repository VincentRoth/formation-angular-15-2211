import { OnDestroy, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, switchMap } from 'rxjs';
import { Animal } from '../../shared/api/animal';
import { AnimalService } from '../../shared/api/animal.service';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.scss'],
})
export class AnimalDetailsComponent implements OnInit, OnDestroy {
  animal: Animal;
  private subscription: Subscription;

  constructor(
    private animalService: AnimalService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.activatedRoute.paramMap
      .pipe(
        switchMap((params) => this.animalService.get(Number(params.get('id'))))
      )
      .subscribe((data) => {
        this.animal = data;
      });
  }
}
