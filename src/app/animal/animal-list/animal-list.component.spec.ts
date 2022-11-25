import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { AnimalListComponent } from './animal-list.component';
import { AnimalListItemComponent } from '../animal-list-item/animal-list-item.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Animal } from '../../shared/api/animal';

describe('AnimalListComponent', () => {
  let component: AnimalListComponent;
  let fixture: ComponentFixture<AnimalListComponent>;
  let httpCtrl: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnimalListComponent, AnimalListItemComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
    }).compileComponents();

    httpCtrl = TestBed.inject(HttpTestingController);

    fixture = TestBed.createComponent(AnimalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of animal in template', () => {
    const requestCtrl = httpCtrl.expectOne('/api/animals');
    expect(requestCtrl.request.method).toBe('GET');

    expect(component.animals).toBeUndefined();

    const animals: Animal[] = [
      { id: 1, name: 'Name1', species: 'Species1', veterinarian: 'Vet1' },
      { id: 2, name: 'Name2', species: 'Species2', veterinarian: 'Vet2' },
      { id: 3, name: 'Name3', species: 'Species3', veterinarian: 'Vet3' },
    ];
    requestCtrl.flush(animals);

    // Instance de classe du composant
    expect(component.animals?.length).toBe(3);

    httpCtrl.verify();

    // Template
    fixture.detectChanges(); // vérifie et rafraichit le template
    const template: HTMLElement = fixture.nativeElement;
    expect(template.querySelectorAll('li')?.length).toBe(3);
  });
});
