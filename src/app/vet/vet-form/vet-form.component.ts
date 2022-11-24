import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Veterinarian } from '../../shared/api/vet';
import { VetService } from '../../shared/api/vet.service';

interface VetFormType {
  id?: FormControl<number>;
  firstName: FormControl<string>;
  lastName: FormControl<string>;
}

@Component({
  selector: 'app-vet-form',
  templateUrl: './vet-form.component.html',
  styleUrls: ['./vet-form.component.scss'],
})
export class VetFormComponent implements OnInit, OnDestroy {
  vetFormGroup: FormGroup<VetFormType>;
  private subscription: Subscription;

  constructor(
    private vetService: VetService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.activatedRoute.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.vetService
          .get(Number(id))
          .subscribe((data) => this.initFormGroup(data));
      } else {
        this.initFormGroup();
      }
    });
  }

  onSubmit(): void {
    if (this.vetFormGroup.invalid) {
      return;
    }

    const formData: Veterinarian = this.vetFormGroup.getRawValue();

    let save$: Observable<Veterinarian | void>;

    if (formData.id) {
      save$ = this.vetService.update(formData);
    } else {
      save$ = this.vetService.create(formData);
    }

    save$.subscribe(() => {
      this.router.navigate(['/vets']);
    });
  }

  private initFormGroup(vet?: Veterinarian): void {
    this.vetFormGroup = new FormGroup<VetFormType>({
      id: new FormControl<number>(vet?.id),
      firstName: new FormControl(vet?.firstName, Validators.required),
      lastName: new FormControl(vet?.lastName, Validators.required),
    });
  }
}
