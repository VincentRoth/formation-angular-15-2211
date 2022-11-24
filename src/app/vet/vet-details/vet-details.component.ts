import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Veterinarian } from '../../shared/api/vet';
import { VetService } from '../../shared/api/vet.service';

@Component({
  selector: 'app-vet-details',
  templateUrl: './vet-details.component.html',
  styleUrls: ['./vet-details.component.scss'],
})
export class VetDetailsComponent implements OnInit {
  vet$: Observable<Veterinarian>;

  constructor(
    private vetService: VetService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.vet$ = this.activatedRoute.paramMap.pipe(
      switchMap((params) => this.vetService.get(Number(params.get('id'))))
    );
  }
}
