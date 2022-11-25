import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { AnimalFormComponent } from './animal-form.component';

describe('AnimalFormComponent', () => {
  let component: AnimalFormComponent;
  let fixture: ComponentFixture<AnimalFormComponent>;
  let httpCtrl: HttpTestingController;

  beforeEach(async () => {
    const paramMap = new Map();
    paramMap.set('id', 1);

    await TestBed.configureTestingModule({
      declarations: [AnimalFormComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap,
            },
            paramMap: of(paramMap),
          },
        },
      ],
    }).compileComponents();

    httpCtrl = TestBed.inject(HttpTestingController);

    fixture = TestBed.createComponent(AnimalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should request correct animal given ID 1', () => {
    const requestCtrl = httpCtrl.expectOne('/api/animals/1');
    requestCtrl.flush({ id: 1 });
    expect(component.animal.id).toBe(1);
  });
});
