import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { SharedModule } from '../shared/shared.module';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalListItemComponent } from './animal-list-item/animal-list-item.component';
import { AnimalRoutingModule } from './animal-routing.module';
import { AnimalComponent } from './animal.component';
import { AnimalFormComponent } from './animal-form/animal-form.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AnimalDetailsComponent,
    AnimalListComponent,
    AnimalListItemComponent,
    AnimalComponent,
    AnimalFormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AnimalRoutingModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
  ],
})
export class AnimalModule {}
